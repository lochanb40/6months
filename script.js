const button = document.getElementById("openBtn");
button.addEventListener("click", () => {

  document.body.innerHTML = `

<div id="petals"></div>
<div id="sparkles"></div>

<div class="letter-page">
    <div class="letter-box">

        <h1>💌 To My Shanu 🤍</h1>

        <p id="letter"></p>

        <div class="seal">❤️</div>

        <div class="next-btn-container">
            <button id="continueBtn" class="next-btn" style="display:none;">
                Our Journey Together ❤️
            </button>
        </div>

    </div>
</div>
`;
    
   const message = `Heyyyyyyy my dearrr Shanuuu kuttiiiii ❤️

I can't believe it's already 6 months of us dating. 

6 months of handling problems.
6 months of making each other laugh.
6 months of loving each other.
6 months of choosing each other.

We've made mistakes, both silly and serious,
but we've always chosen each other over them.

Even when life gets difficult...
Even when we're apart...
Even when things aren't perfect...

I'll always choose you.

Thank you for making these 6 months the happiest of my life.

I hope we'll celebrate many more months and years together.

I love you sooo much ❤️
Till the last page.

Forever Yours, Cheekyyyy ❤️`;

/* ---------- PETALS ---------- */

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML =
        Math.random() > 0.5 ? "🌸" : "🌹";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (18 + Math.random()*12) + "px";

    petal.style.animationDuration =
        (8 + Math.random()*5) + "s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);

}

setInterval(createPetal,700);



/* ---------- SPARKLES ---------- */

const sparkles =
document.getElementById("sparkles");

for(let i=0;i<35;i++){

    const star =
    document.createElement("div");

    star.className = "sparkle";

    star.style.left =
        Math.random()*100+"vw";

    star.style.top =
        Math.random()*100+"vh";

    star.style.animationDelay =
        Math.random()*2+"s";

    sparkles.appendChild(star);

}


    const letter = document.getElementById("letter");

    let i = 0;

    function typeWriter() {
    if (i < message.length) {
        letter.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    } else {
        const btn = document.getElementById("continueBtn");
        btn.style.display = "inline-block";

        btn.onclick = function () {
            window.location.href = "timer.html";
        };
    }
}
    typeWriter();
});
const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);
setInterval(createPetal, 450);
setInterval(createSparkle, 250);