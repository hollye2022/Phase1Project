function addEmoji(x) {
    let emoji1 = document.createElement("p");
    emoji1.className = "emos";
    emoji1.addEventListener("click", ()=> {
        callApi();
    //     emoji1.hidden = true;
    //    setTimeout(() => emoji1.hidden = false, 3000);

    });
    document.querySelector("#emojiBar").append(emoji1);
    emoji1.textContent = `${x}`;

} 

function callApi() {
    let div = document.getElementById("emoji-quote");
    
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => div.textContent = `${data.content + " By " + data.author}`)
}

let h1 = document.createElement("h1")
h1.textContent ="What Emoji Are You Feeling Today?"
document.querySelector("#titleBar").append(h1);

const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","☹️","😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈"]

for (let i = 0; i<=5 ; i ++) {
    const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
    addEmoji(randomEmo)    
}


let btn = document.createElement("button");
btn.textContent = "Shuffle Emoji" 
btn.addEventListener("click", shuffleEmoji)
document.querySelector("#shuffleButton").append(btn);
function shuffleEmoji() {

    const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","☹️","😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈"]
    document.querySelectorAll("p").forEach((p) => p.remove());

    for (let i = 0; i<=5 ; i ++) {
        const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
        addEmoji(randomEmo)    
    }

}



// const postBar = document.getElementById("postBar");

function saveQuote(e){
    console.log("Savequote called");
    e.preventDefault();
    let quote = document.getElementById("fav-quote").value;
    fetch("http://localhost:3000/quotes",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body: JSON.stringify({quote: quote})
    })
    .then(res => res.json())
    .then(data => {
        let div = document.getElementById("yourQuote")
        div.textContent = data.quote;
    })

}

const form = document.getElementById("myForm");
form.addEventListener("submit",  saveQuote);
 