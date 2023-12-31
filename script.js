
/* const question1 = "What was my first job out of College?"
const q1Ans1 = "Equity Research Analyst at Citigroup covering Internet Stocks"
const q1Ans2 = "Performance Marketing VP at digital marketing agency"
const q1Ans3 = "Software Engineer"
const q1Ans4 = "Founder and CEO, Broadway Community"
const q1Ans = q1Ans1

const question2 = "In my last role, I was tasked with growing my client's online sales. In the 6 months from June to December of 2023, how much did the brand grow?"
const q2Ans1 = "10%"
const q2Ans2 = "50%"
const q2Ans3 = "150%"
const q2Ans4 = "1,500%"
const q2Ans = q2Ans4
*/

const questions = [
    {
    question: "What was my first job out of College?"
    answer: [
        "Equity Research Analyst at Citigroup covering Internet Stocks", 
        "Performance Marketing VP at digital marketing agency", 
        "Software Engineer", 
        "Founder and CEO, Broadway Community"
    ]
},
    {
    question: "In my last role, I was tasked with growing my client's online sales. In the 6 months from June to December of 2023, how much did the brand grow?"
    answer: [
        "10%",
        "50%", 
        "150%", 
        "1,500%"
    ]
},
]

let currentQuestionIndex = 0;

function updateQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    
    questionElement.textContent = currentQuestion.question;
    
    // Remove existing answer options
    answersElement.innerHTML = '';
    
    // Create and append new answer options
    currentQuestion.answers.forEach(answer => {
    const option = document.createElement('option');
    option.value = answer;
    option.textContent = answer;
    answersElement.appendChild(option);
    });
    }

    const nextButton = document.getElementById('nextButton'); nextButton.addEventListener('click', () => { currentQuestionIndex++; updateQuestion(); });    

/*
currentQuestion = `Question 1`
questionNumber = parseInt(currentQuestion, 10)

const h4 = document.createElement("h4");
h4.textContent = currentQuestion;

document.querySelector("body").appendChild(h4);

const p = document.createElement("p");
p.textContent = 
    if question1;

document.querySelector("body").appendChild(p);

const ol = document.createElement("ol");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

li1.textContent = q1Ans1;
li2.textContent = q1Ans2;
li3.textContent = q1Ans3;
li4.textContent = q1Ans4;

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);

document.querySelector("body").appendChild(ol);