function addEmoji(x) {
    let emoji1 = document.createElement("p");
    emoji1.className = "emos";
    emoji1.addEventListener("click", ()=> {
        callApi();
    //     emoji1.hidden = true;
    //    setTimeout(() => emoji1.hidden = false, 3000);

    });
    document.querySelector("#emoji-bar").append(emoji1);
    emoji1.textContent = `${x}`;

} 

function callApi() {
    let div = document.getElementById("display-quote");
    
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => div.textContent = `${data.content + " By " + data.author}`)
}


 const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","☹️","😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈","😮‍💨","🥱","👻","🌵"]

for (let i = 0; i<=5 ; i ++) {
    const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
    addEmoji(randomEmo)    
}

document.getElementById("shuffle-emoji").addEventListener("click", shuffleEmoji)

function shuffleEmoji() {

    const emoArray = ["🥰","🥕","🧨","❤️","😁","😭","💍","🎇","🥂","🙀","🐷","😎","🥳","😠","🦄","☹️","😱","🥶","🌙","💘","🫠","😴","😶‍🌫️","🦋","🦩","🍀","🌈"]
    document.querySelectorAll("p").forEach((p) => p.remove());

    for (let i = 0; i<=5 ; i ++) {
        const randomEmo = emoArray[Math.floor(Math.random() * emoArray.length)];
        addEmoji(randomEmo)    
    }

}

const form = document.getElementById("my-form");
form.addEventListener("submit",  postQuote);

function postQuote(e){
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
        let div = document.getElementById("your-quote")
        div.textContent = data.quote;
    })

}

// // create a share button (you can share the quote you get from the emoji)
const shareBtn = document.getElementById("share-btn");
shareBtn.addEventListener("click", async() => {
    const copyContent = document.getElementById("display-quote").textContent;
    await navigator.clipboard.writeText(copyContent);
    const copied = await navigator.clipboard.readText();
    document.getElementById("msg").textContent = "Quote copied!"
    // setTimeout(() => document.getElementById("msg").textContent.hidden = true, 3000);

});




 