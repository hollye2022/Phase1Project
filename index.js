function addEmoji(x) {
    let emoji1 = document.createElement("p");
    emoji1.addEventListener("click", ()=> {
        callApi();
        emoji1.hidden = true;

    });
    document.querySelector("#emojiBar").append(emoji1);
    emoji1.textContent = `${x}`;

} 

function callApi() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => alert(data.content + " By " + data.author))
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
   


}
 

