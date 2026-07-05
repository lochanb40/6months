// Continue Button

document.getElementById("continueBtn").addEventListener("click", () => {
    window.location.href = "moments.html";
});



// Scroll Animation

const cards = document.querySelectorAll(".polaroid");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>observer.observe(card));



// Lightbox

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <span class="close">&times;</span>
    <img class="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightImg = lightbox.querySelector(".lightbox-img");

document.querySelectorAll(".polaroid img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightImg.src = img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});
// Falling Petals

const petals = document.querySelector(".petals");

for(let i=0;i<20;i++){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"%";

    petal.style.animationDuration=(8+Math.random()*8)+"s";

    petal.style.animationDelay=Math.random()*8+"s";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petals.appendChild(petal);

}