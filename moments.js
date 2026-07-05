const notes = document.querySelectorAll(".note");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

notes.forEach(note=>{

observer.observe(note);

});

const button = document.getElementById("continueBtn");

button.addEventListener("click",()=>{

window.location.href="timeline.html";

});
