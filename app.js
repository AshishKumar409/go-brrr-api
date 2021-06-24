let vibrator = document.getElementById("vibrate")

navigator.vibrate = navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate
console.log("hello")
if(navigator.vibrate){
   vibrator.addEventListener("click",()=>{
     navigator.vibrate(2000)  
     console.log("It is working") 
     console.log("brrrrrrr");
   })
}