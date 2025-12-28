const text = "for you 💗";
const message = "Just thought you should know — you’re special.";

let i = 0;
let j = 0;

function typeTitle() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeTitle, 80);
  }
}

function typeMessage() {
  if (j < message.length) {
    document.getElementById("message").innerHTML += message.charAt(j);
    j++;
    setTimeout(typeMessage, 50);
  }
}

typeTitle();
setTimeout(typeMessage, 2000);

