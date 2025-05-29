let btns=['red','yellow','orange','purple'];
let gameSeq=[];
let userSeq=[];
let start=false;
let Level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
      leveUp();
      start=true;
    }
    
})

function flashBtn(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
      randBtn.classList.remove("flash");
    },250)
}

function userFlash(btn){
  btn.classList.add("user-flash");
    setTimeout(function(){
      btn.classList.remove("user-flash");
    },500);
}
function userBtn(){
   let  btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    trackOfGame(userSeq.length-1);
  }

function leveUp(){
   userSeq=[];
   Level++;
   h2.innerText=`Level ${Level}`;
   let randSeq=Math.floor(Math.random()*3);
   let randColor=btns[randSeq];
   let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   flashBtn(randBtn);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
   btn.addEventListener("click",userBtn);
}

function trackOfGame(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length===gameSeq.length)
       setTimeout(leveUp,1000);
  }else{
      h2.innerHTML=`<b>Game Over</b> Press any Key to Game Start <br>Score ${Level}`;
      rest();
    }   
}

function rest(){
   start=false;
   gameSeq=[];
   userSeq=[];
   Level=0;
}