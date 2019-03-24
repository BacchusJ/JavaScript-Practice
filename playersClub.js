// quiz begins with no answers

var correct = 0;

// ask the questions

var answer1 = prompt("Name the fastest Thundercat?");
if (answer1.toUpperCase() === "CHEETARA") {
  correct += 1;
}

var answer2 = prompt("Who is the pretiest Smurf?");
if (answer2.toUpperCase() === "VANITY") {
  correct += 1;
}

var answer3 = prompt("The ememy of the Autobots");
if (answer3.toUpperCase() === "DECEPTICONS") {
  correct += 1;
}

var answer4 = prompt("He-man says. \"for the power of...\"");
if (answer4.toUpperCase() === "GREYSKUL") {
  correct += 1;
}

var answer5 = prompt("The name of the pig in love with a frog.. is Ms. ___");
if (answer5.toUpperCase() === "PIGGY") {
  correct += 1;
}

//ouput results

document.write("<p> You got " + correct + " out of 5 questions correct!</p>");

//rank

if ( correct === 5 ) {
  document.write("<p><strong>You are the winner of the GOLD CROWN!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You are the winner of the Silver Crown!</strong></p>");
} else if (correct >= 2) {
  document.write("<p><strong>You are the winner of the bronze Crown!</strong></p>");
} else {
  document.write("<p><strong>You are a loser</strong></p>");
}
