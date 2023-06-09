let Username = prompt ("Nice to meet you, what's your name?");
console.log (Username)
const Welcomemsg = alert("Welcome to my Pop up Paradise " + Username);

let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback = age >= 18 ?
   'You are in!':
   'You must be 18 years or older to enter';

alert(feedback);

alert('Welcome!')

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }