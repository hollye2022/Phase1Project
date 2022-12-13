let quotesURL = "https://postquotes.onrender.com/quotes";

function addEmoji(x) {
    let emoji1 = document.createElement("p");
    emoji1.className = "emos";
    emoji1.addEventListener("click", ()=> {
        callApi() 
        postHistory(x);

    });
    document.querySelector("#emoji-bar").append(emoji1);
    emoji1.textContent = `${x}`;

} 

async function callApi() {
    let div = document.getElementById("display-quote");
    
    return fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => div.textContent = `${data.content + " By " + data.author}`)
}

async function postHistory(emoji) {
    await callApi();
    console.log("posthistory runed");
    let time = new Date();
    let emoQuote = document.getElementById("display-quote").textContent;
    console.log(emoQuote);
    fetch(quotesURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            "date": time,
            "emoji": emoji,
            "quote": emoQuote,

        })
    })
    
}

 const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","⭐️",
 "😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈","😮‍💨","🥱","👻","🌵","🍄","🌸","❄️",
"🥴","🎃","👍","🌹","🎄","🔥","🌊","☔️","🍇","🥑","🥇","🪗","🎼","","🎨","🏀","❓"];

for (let i = 0; i<=5 ; i ++) {
    const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
    addEmoji(randomEmo)    
}

document.getElementById("shuffle-emoji").addEventListener("click", shuffleEmoji)

function shuffleEmoji(e) {
console.log(e);
    const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","☹️","😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈"]
    document.querySelectorAll("p").forEach((p) => p.remove());

    for (let i = 0; i<=5 ; i ++) {
        const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
        addEmoji(randomEmo)    
    }

}

document.addEventListener("DOMContentLoaded", handleEvent)

function handleEvent(e){
    e.preventDefault();
    const form = document.getElementById("my-form");
form.addEventListener("submit", postQuote);

function postQuote(e){
    e.preventDefault();
    let div = document.getElementById("your-quote");
    let input = document.getElementById("fav-quote");
   div.textContent =input.value;
}

}


//  no need to update in the datebase, since i am not retrieving it anyways.
// function postQuote(e){
//     e.preventDefault();
//     let quote = document.getElementById("fav-quote").value;
//     let date = new Date();
//     console.log(date);
//     fetch(quotesURL,{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             Accept:"application/json"
//         },
//         body: JSON.stringify({favQuote: quote},{date: date})
//     })
//     .then(res => res.json())
//     .then(data => {
//         let div = document.getElementById("your-quote")
//         div.textContent = data.favQuote;
//     })

// }

// // create a share button (you can share the quote you get from the emoji)
const shareBtn = document.getElementById("share-btn");
shareBtn.addEventListener("click", async() => {
    const copyContent = document.getElementById("display-quote").textContent;
    await navigator.clipboard.writeText(copyContent);
    const copied = await navigator.clipboard.readText();
    document.getElementById("msg").textContent = "Quote copied!"
    const msgContent = document.getElementById("msg");
    msgContent.hidden = false;
    setTimeout(() => msgContent.hidden = true, 3000);

});


document.getElementById("history").addEventListener("click", () => {

   fetch(quotesURL)
   .then(res => res.json())
   .then((data) => {
        for (let ele of Object.values(data)) {
            console.log(ele);
            let li = document.createElement("ol")
            document.getElementById("action-history").append(li);
            
            const div = document.createElement("div")
            let dateString = ele.date;
            let dateObject = new Date(Date.parse(dateString))
            let realDate = dateObject.toLocaleString();
            div.textContent = realDate;

            const div2 = document.createElement("div");
            div2.textContent = ele.emoji;
           
            const div3 = document.createElement("div")
            div3.textContent = ele.quote
           
            li.append(div, div2, div3);
        }
    })
        
})



