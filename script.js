
const quiz = [
    {
    question: "What was my first job out of College?",
    answer: [
        "Equity Research Analyst at Citigroup covering Internet Stocks", 
        "Performance Marketing VP at digital marketing agency", 
        "Software Engineer", 
        "Founder and CEO, Broadway Community"
    ]
},
    {
    question: "In my last role, I was tasked with growing my client's online sales. In the 6 months from June to December of 2023, how much did the brand grow?",
    answer: [
        "10%",
        "50%", 
        "150%", 
        "1,500%"
    ]
},
]

let currentQuestion = 0



// function nextQuestion () {
//     let p = document.createElement("p")
//     p.textContent = 
// }

let startQuizInput = document.querySelector("#start-quiz")
let div = document.querySelector("#question")

function quizStarted () {
    let p = document.createElement("p")
    p.textContent = quiz[currentQuestion].question
    div.append(p)

    let ol = document.createElement("ol")
    p.append(ol)
    
    for (i = 0; i < quiz[currentQuestion].answer.length; i++) {
        let li = document.createElement("li")
        li.textContent = quiz[currentQuestion].answer[i]
        ol.append(li)
    }
}

startQuizInput.addEventListener("submit", (event) => {
    event.preventDefault();
    quizStarted ();
})