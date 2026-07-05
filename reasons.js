// =============================
// Fade In On Scroll
// =============================

const cards = document.querySelectorAll(".reason-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});

// =============================
// Continue Button
// =============================

const continueBtn=document.getElementById("continueBtn");

continueBtn.addEventListener("click",()=>{

    window.location.href="timeline.html";

});

// =============================
// Heart Pulse
// =============================

const heart=document.querySelector(".heart");

setInterval(()=>{

    heart.classList.add("pulse");

    setTimeout(()=>{

        heart.classList.remove("pulse");

    },500);

},2500);

// =============================
// Smooth Scroll
// =============================

document.documentElement.style.scrollBehavior="smooth";