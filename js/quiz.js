
const quizData = [{
question: " How many Voyager Satellite have been launched yet?",
a: "Three",
b: "One",
c: "Four",
d: "Two",
correct: "d",
},
{
question: "Which Voyager Spacecraft have fly beyond solar syatem?",
a: "Voyager-II",
b: "Voyager-I",
c: "Both A & B",
d: "None of the Above",
correct: "b",
},
{
question: "In April 2022 Voyager-I Covers ____ Distance From The Sun?",
a: "20.3 Billion km",
b: "21.3 Billion km",
c: "22.3 Billion km",
d: "23.3 Billion km",
correct: "c",
},
{
question: "In April 2022 Voyager-II Covers ____ Distance From The Sun?",
a: "20.6 Billion km",
b: "18.6 Billion km",
c: "20.5 Billion km",
d: "18.5 Billion km",
correct: "d",
},
{
question: "Which was the first spacecraft to fly by Neptune?",
a: "Juno",
b: "Voyager-II",
c: "Galex",
d: "Messanger",
correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
const data = quizData[index]
const ans = getAnswer()
if (ans === data.correct) {
    correct++;
} else {
    incorrect++;
}
index++;
loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
(inputEl) => {
    if (inputEl.checked) {
        ans = inputEl.value;
    }
}
)
return ans;
}

const reset = () => {
allInputs.forEach(
(inputEl) => {
    inputEl.checked = false;
}
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container01")[0].innerHTML = `
<div class="col">
    <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
</div>
`
}
loadQuestion(index);