var mySeconds;
var intervalHandle;

var x = document.getElementById("myAudio");
function playAudio(){ 
   x.play();
}
function resetPage(){
  document.getElementById("inputArea").style.display="none";  
  
  
}
function tick(){
  var timeDisplay=document.getElementById("time");
  var hours = Math.floor(mySeconds/3600);
  var min=Math.floor(mySeconds/60);
  var sec=mySeconds-(min*60);
  
  if (sec < 10) {
    sec="0"+sec;
  }
  
  var message=hours.toString()+":"+min.toString()+":"+sec;
  
  timeDisplay.innerHTML=message;
  
  if(mySeconds===0){
    //alert("CONGRATULATIONS!! You've completed your task.");
      playAudio();
    clearInterval(intervalHandle);
    resetPage();
  }mySeconds--;
  
  
  
  
}
function startCounter(){
  var myInput=document.getElementById("hours").value;
  if (isNaN(myInput)){
    alert("Type a valid number please");
    return;
  }
   if(myInput>24){
      alert("Type value less than or equal to 24");
      return;
   }
  mySeconds=myInput*3600;
  
  intervalHandle=setInterval(tick, 1000);
  
  document.getElementById("inputArea").style.display="none";
  
  
}


window.onload=function(){
  var myInput=document.createElement("input");
  myInput.setAttribute("type","text");
  myInput.setAttribute("id","hours");
  myInput.setAttribute("class","main");
  var myButton=document.createElement("input");
  myButton.setAttribute("type","button");
  myButton.setAttribute("value","START TIMER");
  myButton.setAttribute("class","controls");
   var pauseButton = document.createElement("input");
   pauseButton.setAttribute("type","button");
   pauseButton.setAttribute("value","HAVE A BREAK");
  myButton.onclick=function(){
    startCounter();  
    
  }
  
  document.getElementById("inputArea").appendChild(myInput);
  document.getElementById("inputArea").appendChild(myButton);
  }
  let int = null;
  document.getElementById('break').addEventListener("click",
  () => {
clearInterval(int);
  })