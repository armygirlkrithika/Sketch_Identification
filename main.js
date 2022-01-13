function preload(){
 classifier = ml5.imageClassifier('DoodleNet')


}


function setup(){
 canvas = createCanvas(450,450) 
 canvas.position(550,250)
 background("white")
 synth = window.speechSynthesis;
   canvas.mouseReleased(classifyCanvas)

}



function draw(){
  stroke(0);
  strokeWeight(8)
if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
  

}

function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}

function gotResult(error,result){
    if(error){
        console.error(error)
    }

    else{
        console.log(result)
        document.getElementById("label").innerHTML = "label - "+result[0].label
        document.getElementById("confidence").innerHTML = "confidence - "+ Math.round (result[0].confidence *100 ) +"%"

        utterthis = new SpeechSynthesisUtterance(result[0].label)
        synth.speak(utterthis)
        
    }

}


function clearCanvas(){

    background("white")
}