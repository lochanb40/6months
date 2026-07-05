const startDate = new Date("2026-02-05T21:20:00");

function updateTimer() {

    const previewDate = new Date("2026-07-05T12:00:00");
const realNow = new Date();

const now = realNow < previewDate ? previewDate : realNow;

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    document.getElementById("months").textContent = years * 12 + months + 1;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateTimer();

setInterval(updateTimer, 1000);
const particles = document.querySelector(".particles");

function createParticle(){

    const p = document.createElement("span");

    p.innerHTML = "✨";

    p.style.left = Math.random()*100 + "vw";

    p.style.animationDuration = (3 + Math.random()*3) + "s";

    p.style.fontSize = (10 + Math.random()*15) + "px";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },6000);
}

setInterval(createParticle,250);  