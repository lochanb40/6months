const chat = document.getElementById("chat");
const continueBtn = document.getElementById("continueBtn");

continueBtn.style.opacity = "0";

const messages = [

{
    sender:"me",
    text:`Heyy i know you spoke to kyniska about relationship and about us and whatever decision you take is completely upto you i don't want to force you to take up something or force my opinions on you, see shanu I know whatever happened before was bad and I understand if you don't wanna trust me, but then all i want to say is that, I'll be different, dw about anything I'll never leave you take your time and trust me if you want to alr? You mean everything to me shanu, i can't even have the thought of leaving you ever, if you want I'm ready to give you the reassurances and promises every single day and hr and not just in words I'll actually prove it, no pressure all upto you, alrr ?? Dw about anything shanu, I'm yours and all yours alr ? Im willing to always prove it, honestly ? Even I am a bit scared, but yes I'm willing to put in each and every bit of effort. Why ? Because you deserve it your worth it, you deserve it all shanu,  take your time and think, take as much as time as you want.....`,
    time:"9:20 PM",
    delay:4500
},

{
    sender:"me",
    text:`I promise shanu I'll never break your trust never ever, death is preferable over that, i promise I'll try each and everything put in everything to make it last forever to make us last forever i promise I'll always be there for you no matter what doesn't matter if we fight or I'm sad or angry or anything, you come before each and everything, i swear, i promise shanu i promise you each and everything, i know your scared even I am but hey we'll do it, im sure of it, I'm 100% damn sure about it,.take your time and think about it`,
    time:"9:20 PM",
    delay:5000
},


{
    sender:"her",
    text:"Holllaaaa meee backyyyyy ❤️",
    time:"9:20 PM",
    delay:1800
},

{
    sender:"her",
    text:"Hehheheheheeee yeshhh yeshhhh meee trustinggg uuuuuu 😊😁",
    time:"9:20 PM",
    delay:2500
},

{
    sender:"me",
    text:"Sooo",
    time:"9:20 PM",
    delay:1000
},

{
    sender:"me",
    text:"That meanss",
    time:"9:20 PM",
    delay:1000
},

{
    sender:"me",
    text:"We are ?",
    time:"9:20 PM",
    delay:1200
},

{
    sender:"me",
    text:"We are",
    time:"9:20 PM",
    delay:900
},

{
    sender:"her",
    text:"Weeee areeeee",
    time:"9:20 PM",
    delay:1800
},

{
    sender:"her",
    text:"Yeahhhhhh tellll ❤️",
    time:"9:20 PM",
    delay:1800
},

{
    sender:"me",
    text:"Dating",
    time:"9:20 PM",
    delay:2500
},

{
    sender:"her",
    text:"Hehheheheeee yeshhhhh ❤️",
    time:"9:20 PM",
    delay:3000
},

{
    sender:"her",
    text:"We areeee ❤️",
    time:"9:20 PM",
    delay:2000
},

{
    sender:"me",
    text:"Pinch me tm 😭",
    time:"9:21 PM",
    delay:1500
},

{
    sender:"me",
    text:"Gawd",
    time:"9:21 PM",
    delay:1200
},

{
    sender:"her",
    text:"Awwwwwwwww ❤️",
    time:"9:21 PM",
    delay:1500
},

{
    sender:"me",
    text:"Actually",
    time:"9:21 PM",
    delay:1000
},

{
    sender:"me",
    text:"This is actually happening rn",
    time:"9:21 PM",
    delay:2500
},

{
    sender:"her",
    text:"Yeshhhh yeshhhhh itsss realllll ❤️",
    time:"9:21 PM",
    delay:2500
},

{
    sender:"her",
    text:"Tysmmmmmm for urrr waittttt 🥹❤️",
    time:"9:21 PM",
    delay:2500
},

{
    sender:"me",
    text:"You sure na shanu it's real",
    time:"9:22 PM",
    delay:2500
},

{
    sender:"me",
    text:"So your my gf ❤️",
    time:"9:22 PM",
    delay:2500
},

{
    sender:"her",
    text:"Ohhhh yeshhhhhhhh ❤️",
    time:"9:22 PM",
    delay:2500
},

{
    sender:"me",
    text:"YOUR MY GF 😭❤️",
    time:"9:22 PM",
    delay:3500
},

{
    sender:"her",
    text:"Yupppppp i ammmm ur gff anddd ur mahhh bf ❤️",
    time:"9:22 PM",
    delay:3500
},

{
    sender:"me",
    text:"AHHHHHHH",
    time:"9:22 PM",
    delay:700
},

{
    sender:"me",
    text:"Can I tell somethingggg",
    time:"9:22 PM",
    delay:1200
},

{
    sender:"her",
    text:"Whattt whttt",
    time:"9:22 PM",
    delay:1400
},

{
    sender:"her",
    text:"Mhmmmm?",
    time:"9:22 PM",
    delay:1200
},

{
    sender:"me",
    text:"I",
    time:"9:22 PM",
    delay:600
},

{
    sender:"me",
    text:"Love you ❤️",
    time:"9:22 PM",
    delay:1800
},

{
    sender:"her",
    text:"Awwwwwwww i loveee yaaa moreeee ❤️",
    time:"9:22 PM",
    delay:2500
},

{
    sender:"me",
    text:"AHHHHH",
    time:"9:22 PM",
    delay:700
},

{
    sender:"me",
    text:"Is this realllll",
    time:"9:22 PM",
    delay:1000
},

{
    sender:"me",
    text:"AHHHHHHH",
    time:"9:22 PM",
    delay:700
},

{
    sender:"me",
    text:"IMM GONNAAA DIEEEE 😭❤️",
    time:"9:22 PM",
    delay:2200
},

{
    sender:"her",
    text:"Heheheheeeee ❤️",
    time:"9:22 PM",
    delay:1500
},

{
    sender:"me",
    text:"SHANUUUU I LOVE YOU SOOO MUCHHHHHH ❤️",
    time:"9:23 PM",
    delay:2500
},

{
    sender:"her",
    text:"Awww calmmmm downnnnn ❤️",
    time:"9:23 PM",
    delay:1800
},

{
    sender:"her",
    text:"I loveeee uuuu evennnn moreeee 😆😁❤️",
    time:"9:23 PM",
    delay:2500
},

{
    sender:"me",
    text:"*hugs her tightly* I love you i love you so damn muchhhhhh",
    time:"9:25 PM",
    delay:1800
},

{
    sender:"me",
    text:"Gawd I'm gonna cry",
    time:"9:25 PM",
    delay:900
},

{
    sender:"me",
    text:"Happy tears",
    time:"9:25 PM",
    delay:900
},

{
    sender:"her",
    text:"*hugss himm backkk tightly* awwwwww tysmmmmmmm",
    time:"9:25 PM",
    delay:1700
},

{
    sender:"her",
    text:"Hehheheheeee 🤭🤭🤭🤭",
    time:"9:25 PM",
    delay:1300
},

{
    sender:"me",
    text:"You sure about this right ?",
    time:"9:26 PM",
    delay:1500
},

{
    sender:"her",
    text:"Yeshhhh yeshhhhh i ammmm",
    time:"9:26 PM",
    delay:1500
},

{
    sender:"me",
    text:"100%",
    time:"9:26 PM",
    delay:800
},

{
    sender:"her",
    text:"Yupppppppp 1000%",
    time:"9:26 PM",
    delay:1400
},

{
    sender:"me",
    text:"AHHHHH",
    time:"9:26 PM",
    delay:900
},

{
    sender:"me",
    text:"This is what I was meaning to tell",
    time:"9:26 PM",
    delay:1400
},

{
    sender:"her",
    text:"Ohhhhhhh hoooooooo",
    time:"9:26 PM",
    delay:1200
},

{
    sender:"me",
    text:"😅😅😅😅",
    time:"9:27 PM",
    delay:900
},

{
    sender:"me",
    text:"Didn't hv the courage",
    time:"9:27 PM",
    delay:1100
},

{
    sender:"me",
    text:"Was scared",
    time:"9:27 PM",
    delay:900
},

{
    sender:"her",
    text:"Awwwwww itss alrrr",
    time:"9:27 PM",
    delay:1200
},

{
    sender:"her",
    text:"Heheheheheheee",
    time:"9:27 PM",
    delay:900
},

{
    sender:"me",
    text:"Hehehehehehehehe",
    time:"9:27 PM",
    delay:900
},

{
    sender:"me",
    text:"Actually this is happening?",
    time:"9:28 PM",
    delay:1400
},

{
    sender:"her",
    text:"Haaaaaaaaaaa actualllyyyyy",
    time:"9:28 PM",
    delay:1400
},

{
    sender:"me",
    text:"Pakkka pakka",
    time:"9:28 PM",
    delay:1000
},

{
    sender:"her",
    text:"Yeahhhhhh pakkkaa pakkaa",
    time:"9:28 PM",
    delay:1400
},

{
    sender:"me",
    text:"YAYYYYYYY",
    time:"9:28 PM",
    delay:900
},

{
    sender:"me",
    text:"Gawdddd",
    time:"9:28 PM",
    delay:800
},

{
    sender:"me",
    text:"My gf",
    time:"9:28 PM",
    delay:900
},

{
    sender:"her",
    text:"Meee urr gfffff 😆😆😆😆😆",
    time:"9:29 PM",
    delay:1500
},

{
    sender:"me",
    text:"Yessss",
    time:"9:29 PM",
    delay:800
},

{
    sender:"me",
    text:"Myyy gffff",
    time:"9:29 PM",
    delay:900
},

{
    sender:"her",
    text:"Anddd whoo issss mahhh bf 🤔🤔",
    time:"9:29 PM",
    delay:1400
},

{
    sender:"me",
    text:"Meeeeee ofccc",
    time:"9:29 PM",
    delay:900
},

{
    sender:"her",
    text:"Awwwww yeshhhh ur rightttt 😁😁😁",
    time:"9:29 PM",
    delay:1400
},

{
    sender:"me",
    text:"YUPPP",
    time:"9:30 PM",
    delay:900
},

{
    sender:"me",
    text:"You don't know how happy I am",
    time:"9:30 PM",
    delay:1500
},

{
    sender:"her",
    text:"Ohhhh reallyyyyyyy meee alsoooo happyyyy happpyyyy",
    time:"9:30 PM",
    delay:1800
},

{
    sender:"me",
    text:"Actually actually??",
    time:"9:30 PM",
    delay:1000
},

{
    sender:"me",
    text:"Maa gf",
    time:"9:30 PM",
    delay:900
},

{
    sender:"her",
    text:"Yeahhhhhhhhhhhh 😁😁😁😁",
    time:"9:30 PM",
    delay:1500
},

{
    sender:"me",
    text:"Yuppppp",
    time:"9:30 PM",
    delay:900
},

{
    sender:"me",
    text:"Hands are Shivering so bad",
    time:"9:31 PM",
    delay:1300
},

{
    sender:"her",
    text:"Myyyy minddd is blankkkkk",
    time:"9:31 PM",
    delay:1400
},

{
    sender:"me",
    text:"Mineeee tooooo",
    time:"9:31 PM",
    delay:1100
},

{
    sender:"her",
    text:"Hehheheheheeee",
    time:"9:31 PM",
    delay:900
},

{
    sender:"me",
    text:"Hehehe",
    time:"9:31 PM",
    delay:700
},

{
    sender:"her",
    text:"Yeshhhhhhhh",
    time:"9:31 PM",
    delay:800
},

{
    sender:"me",
    text:"I thought of giving you a surprise tm instead I got a surprise",
    time:"9:31 PM",
    delay:2200
},

{
    sender:"her",
    text:"🤭🤭🤭🤭 aiyooooooo",
    time:"9:31 PM",
    delay:1200
},

{
    sender:"me",
    text:"Soo we are actually official now ?",
    time:"9:32 PM",
    delay:1700
},

{
    sender:"her",
    text:"Yuppppppp we areeeee 😊",
    time:"9:32 PM",
    delay:1500
},

{
    sender:"me",
    text:"We areee ?",
    time:"9:32 PM",
    delay:900
},

{
    sender:"me",
    text:"We are we are ?",
    time:"9:32 PM",
    delay:900
},

{
    sender:"her",
    text:"We areeee oneeee ...........lovely amazinggggg funnyyy coupleeeee",
    time:"9:32 PM",
    delay:2500
},

{
    sender:"me",
    text:"Yupppp",
    time:"9:32 PM",
    delay:800
},

{
    sender:"her",
    text:"Hehheheheeeee",
    time:"9:33 PM",
    delay:900
},

{
    sender:"me",
    text:"Gawddddddf",
    time:"9:33 PM",
    delay:900
},

{
    sender:"me",
    text:"Tms gonna be something else",
    time:"9:33 PM",
    delay:1600
},

{
    sender:"her",
    text:"Ikrrrrrrrrrr",
    time:"9:33 PM",
    delay:1200
},

{
    sender:"me",
    text:"We won't be able to look at each other only",
    time:"9:33 PM",
    delay:1800
},

{
    sender:"her",
    text:"Yeahhhhhh trueeeeee",
    time:"9:33 PM",
    delay:1400
},

{
    sender:"her",
    text:"🟡🟡🟡🟡🟡",
    time:"9:33 PM",
    delay:800
},

{
    sender:"me",
    text:"Yuoppp",
    time:"9:33 PM",
    delay:900
},

{
    sender:"me",
    text:"🟡🟡🟡",
    time:"9:33 PM",
    delay:700
},
];

let currentIndex = 0;



function createBubble(sender,text,time){

    const bubble = document.createElement("div");

    bubble.className = `message ${sender}`;

    bubble.innerHTML = `
        <div>${text}</div>
        <div class="time">${time}</div>
    `;

    chat.appendChild(bubble);

    bubble.scrollIntoView({

        behavior:"smooth",
        block:"end"

    });

}



function typingBubble(){

    const typing = document.createElement("div");

    typing.className="typing her";

    typing.id="typing";

    typing.innerHTML=`

        <span></span>
        <span></span>
        <span></span>

    `;

    chat.appendChild(typing);

    typing.scrollIntoView({

        behavior:"smooth"

    });

}



function removeTyping(){

    const typing=document.getElementById("typing");

    if(typing){

        typing.remove();

    }

}



function nextMessage(){

    if(currentIndex>=messages.length){

        continueBtn.style.opacity="1";

        return;

    }

    const msg=messages[currentIndex];

    if(msg.sender==="her"){

        typingBubble();

        setTimeout(()=>{

            removeTyping();

            createBubble(
                msg.sender,
                msg.text,
                msg.time
            );

            currentIndex++;

            setTimeout(nextMessage,msg.delay);

        },1200);

    }

    else{

        createBubble(
            msg.sender,
            msg.text,
            msg.time
        );

        currentIndex++;

        setTimeout(nextMessage,msg.delay);

    }

}



window.onload=()=>{

    setTimeout(nextMessage,1000);

};



continueBtn.onclick=()=>{

    window.location.href="gallery.html";

};
setTimeout(() => {

    const ending = document.createElement("div");

    ending.className = "proposal-ending";

    ending.innerHTML = `
        <h2>That night...</h2>

        <p>
            Two best friends became something much more. 🤍
        </p>

        <p class="ending-line">
            And that was only the beginning of our story...
        </p>

        <button id="nextChapter">
            🤍 One Last Thing 🤍 →
        </button>
    `;

    document.body.appendChild(ending);

    document
        .getElementById("nextChapter")
        .addEventListener("click", () => {

            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location.href = "finalletter.html";

            }, 1000);

        });

}, messages.reduce((t, m) => t + m.delay, 0) + 3000);