let vibrator = document.getElementById("vibrate")
let darthVader = document.getElementById("DarthVader")
let jamesBond = document.getElementById("JamesBond")
let superMario= document.getElementById("SuperMario")

navigator.vibrate = navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate

if(navigator.vibrate){
   [vibrator,darthVader,jamesBond,superMario].forEach((val)=>{
     val.addEventListener("click",(ev)=>{
     if(ev.target.id==="vibrate"){
         navigator.vibrate(1000) 
     }else if(ev.target.id==="DarthVader"){
      navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40, 500]);
     }else if(ev.target.id==="SuperMario"){
       navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
     }else {
       navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25, 75,125,75,25,75,125,100,100]);
     }
     }) 
   })
}