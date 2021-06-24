let vibrator = document.getElementById("vibrate")

navigator.vibrate = navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate

if(navigator.vibrate){
   vibrator.addEventListener("click",()=>{
     navigator.vibrate(2000)  
     navigator.vibrate(0)  
   })
}