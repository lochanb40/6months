// Relationship stages

const steps = document.querySelectorAll(".step");

steps.forEach((step,index)=>{

step.style.opacity="0";

setTimeout(()=>{

step.style.opacity="1";

step.style.transform="translateY(0)";

},1000+(index*1000));

});



// Fade in message

const message=document.querySelector(".message");

message.style.opacity="0";

setTimeout(()=>{

message.style.transition="1.5s";

message.style.opacity="1";

},8500);



// Fade in footer

const footer=document.querySelector(".footer");

footer.style.opacity="0";

setTimeout(()=>{

footer.style.transition="1.5s";

footer.style.opacity=".8";

},10000);



// Fade in final line

const last=document.querySelector(".last");

last.style.opacity="0";

setTimeout(()=>{

last.style.transition="2s";

last.style.opacity="1";

},12000);