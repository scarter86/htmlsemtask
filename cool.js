let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback = age >= 18 ?
   'You are in!':
   'You must be 18 years or older to enter';

alert(feedback);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }