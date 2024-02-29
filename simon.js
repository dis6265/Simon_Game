let gamesequence =[];
let usersequence =[];

let btns = ["yellow", "red", "purple","green"];

let started=false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started==false)
   {
        console.log("Game is started ");
        started=true;

        levelUp();
   }   
});

function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function() {
      btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn) {
   btn.classList.add("userFlash");
   setTimeout(function() {
      btn.classList.remove("userFlash");
   }, 250);
}

function levelUp(){
   usersequence=[];
   level++;
   h2.innerText=`level ${level}`;

   let randInx=Math.floor(Math.random() * 3);
   let randclr=btns[randInx];
   let randbtn=document.querySelector(`.${randclr}`);
   // console.log(randInx);
   // console.log(randclr);
   // console.log(randbtn);
   gamesequence.push(randclr);
   console.log(gamesequence);
   btnFlash(randbtn);
}

function checkAns(idx){
   if(usersequence[idx] === gamesequence[idx]){
      // console.log("same Value");
         if(gamesequence.length == usersequence.length)
         {setTimeout(levelUp,1000);}
   }
   else{
      h2.innerHTML=`Game over! your score is <b> ${level}</b> <br> Press any key to start the game.`;
      document.querySelector("body").style.backgroundcolor = "red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundcolor= "white";
      }, 250);
      reset();
   }
}

function btnPress(){
   // console.log(this);
   let btn=this;
   userFlash(btn);

   userClr = btn.getAttribute("id");
   // console.log(userClr);
   usersequence.push(userClr);

   checkAns(usersequence.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
   btn.addEventListener("click", btnPress);
}

function reset()
{
   started=false;
   gamesequence=[];
   usersequence=[];
   level=0;
}