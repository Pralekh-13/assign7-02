function setColor() {
    let ch=document.getElementsByClassName("child")      
   ch[0].setAttribute("style","background-color:blue;color:white;")
   ch[8].setAttribute("style","background-color:green;color:white;")
   ch[ch.length-1].setAttribute("style","background-color:palevioletred;color:white;")
   for(let i=0;i<ch.length;i++){
      if(i%2!=0){
         ch[i].setAttribute("style","background-color:#01fe00;color:white;")
      }
   }
}