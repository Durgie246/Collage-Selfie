
        
img_id = "";
function Start()
{
var synth = window.speechSynthesis;
Webcam.attach(camera);
setTimeout (function() 
{
img_id = "selfie1";
take_snapshot();
speak_data = "taking your next selfie in 10 secounds";
var Speach = new SpeechSynthesisUtterance(speak_data);
synth.speak(Speach);
}, 5000);

setTimeout (function() 
{
img_id = "selfie2";
take_snapshot();
speak_data = "taking your next selfie in 15 secounds";
var Speach = new SpeechSynthesisUtterance(speak_data);
synth.speak(Speach);
}, 10000);

setTimeout (function() 
{
img_id = "selfie3";
take_snapshot();
var Speach = new SpeechSynthesisUtterance(speak_data);
synth.speak(Speach);
}, 15000);


}


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        img = data_uri;
if (img_id == "selfie1")
{
        alert("hi");
        document.getElementById("meme1").src= data_uri;
}
if (img_id == "selfie2")
{
        document.getElementById("meme2").src= data_uri;
}
if (img_id == "selfie3")
{
        document.getElementById("meme3").src= data_uri;
}
    })

}

Webcam.set({
        width: 360,
        height:250,
        image_format: 'png',
        png_quality: 100
        });





