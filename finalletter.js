// Continue button

const endBtn = document.getElementById("endBtn");

endBtn.addEventListener("click",()=>{

window.location.href="ending.html";

});



// ⭐ Twinkling Stars ⭐

const stars = document.querySelector(".stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

star.style.animationDuration=(2+Math.random()*3)+"s";

stars.appendChild(star);

}