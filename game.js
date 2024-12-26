score=0;
cross=true;


document.onkeydown=function(e){
    console.log("Key code is:", e.keyCode);
    if(e.keyCode===38){
        dino=document.querySelector(".dino");
      dino.classList.add("animatedino");
    }
    if(e.keyCode===39){
      dino=document.querySelector(".dino");
     dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX+112+'px';
  }
  if(e.keyCode===37){
    dino=document.querySelector(".dino");
   dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dino.style.left=(dinoX-112)+'px';
}
    setTimeout(() => {
     dino.classList.remove("animatedino");
    },700)
}
setInterval(()=>{
  dino=document.querySelector(".dino");
  obstacle=document.querySelector(".obstacle");
  gameOver=document.querySelector(".gameOver");


  dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));


  ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
  oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));

  offsetX=Math.abs(dx-ox);
  offsetY=Math.abs(dy-oy);

  // console.log(offsetX+offsetY);

  if(offsetX<110 && offsetY<170){
    gameOver.style.visibility='visible';
    obstacle.classList.remove("obstacleAni");
  }
  else if(offsetX<150 && cross){
    score+=1;
    updateScore(score);
    cross=false;
    setTimeout(()=>{
      cross=true;
    },1000)
  }
  setTimeout(()=>{
    aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur=(aniDur+0.8)+'s';
  },500)

  
},100)

function updateScore(score){
  let scoreContainer=document.querySelector('.score');
  scoreContainer.innerHTML="Your Score "+ score;
}