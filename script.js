const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwords = document.querySelectorAll(".password");
let password1 = document.querySelector(".password-1");
let password2 = document.querySelector(".password-2");
let button = document.querySelector(".button");
let modal = document.querySelector(".modal");

let result = "";

function chooseCharacter(index) {
  for (let i = 0; i < index; i++) {
    let randomNumber = parseInt(Math.random() * characters.length);
    let randomCharacter = characters[randomNumber];
    result += randomCharacter;
  }
  return result;
}

button.addEventListener("click", () => {
  result = "";
  password1.innerText = chooseCharacter(16);
  result = "";
  password2.innerText = chooseCharacter(16);
});

console.log(passwords);

password1.addEventListener("click", () => {
  navigator.clipboard.writeText(password1.innerText);
  modal.classList.add("active");
});

password2.addEventListener("click", () => {
  navigator.clipboard.writeText(password2.innerText);
  modal.classList.add("active");
});
