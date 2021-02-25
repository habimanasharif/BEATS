var onplayed= document.getElementById("onplay");
var play= document.getElementById("paused");

play.onclick=function(){
    var playdate= new Date
    if(play.classList[1]==="fa-play")
    {
   
    onplayed.style.animation="runOnplay 135s linear"
    play.classList.add("fa-pause");
    play.classList.remove("fa-play")
    }else{
        onplayed.style.width="0%"
        play.classList.remove("fa-pause");
        play.classList.add("fa-play")  
    }

    
}