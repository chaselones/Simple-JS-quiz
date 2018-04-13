//Prompt the user for their name;
var user = prompt("Identify yourself.  What is your first name?");

//put users name and a greeting into the HTML;
document.getElementById("welcome").innerHTML = "Hello " + user + ", test your knowledge of flowers below.  Keep in mind, if you don't answer a question, it will be considered wrong. ";

//Set up the answer class;
class answer {
    constructor(answer) {
        this.answer = answer;
    }
};

//Set right answers;
var q1 = new answer("q1b");
var q2 = new answer("q2a");
var q3 = new answer("q3d");
var q4 = new answer("q4c");
var q5 = new answer("q5a");


function SubmitAnswers() {
    var right = 0;
    var wrong = 0;
    var r1 = document.getElementById(q1.answer).checked;
    if (r1 === true) { right++; } else { wrong++; };
    var r2 = document.getElementById(q2.answer).checked;
    if (r2 === true) { right++; } else { wrong++; };
    var r3 = document.getElementById(q3.answer).checked;
    if (r3 === true) { right++; } else { wrong++; };
    var r4 = document.getElementById(q4.answer).checked;
    if (r4 === true) { right++; } else { wrong++; };
    var r5 = document.getElementById(q5.answer).checked;
    if (r5 === true) { right++; } else { wrong++; };

    alert("You got " + right + " answers correct, and you got " + wrong + " wrong!");
    if (r1 === false) { alert("You chose the wrong answer on question One.") };
    if (r2 === false) { alert("You chose the wrong answer on question Two.") };
    if (r3 === false) { alert("You chose the wrong answer on question Three.") };
    if (r4 === false) { alert("You chose the wrong answer on question Four.") };
    if (r5 === false) { alert("You chose the wrong answer on question Five.") };
};