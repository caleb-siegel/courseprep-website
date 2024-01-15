
const quiz = [
    {
    question: "What was my first job out of College?",
    answer: [
        "Equity Research Analyst at Citigroup covering the large-cap Internet sector", 
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
    {
    question: "How many Broadway Shows have I seen?",
    answer: [
        "0",
        "10",
        "20",
        "50+"
    ]
},
    {
    question: "How did I propose to my wife?",
    answer: [
        "I surprised her by flying to Panama, made a reservation at our favorite restaurant and proposed after they brought dessert.",
        "Since her biggest dream is to be a contestant on Survivor, I organized a 3-day Survivor game with 11 players. We had tribal councils and blindsides, reward and immunity challenges, hidden immunity idols and confessionals. After the final tribal council, I set up the area with tiki torches, pictures, hand-written letters, roses and candles and when she came back, I proposed.",
        "I set up a picnic in Central Park with her favorite foods: pizza and mac n cheese. I customized a deck of playing cards with one saying will you marry me. We played war until we got to the final card and then I proposed.",
        "Skydiving!"
    ]
}
]
let currentQuestion = 0

let startQuizInput = document.querySelector("#start-quiz")
let questionDiv = document.querySelector("#question")
let buttonDiv = document.querySelector(`#next-question-button`)

// create function that launches the quiz: add question; add answers; change button
function quizStarted () {
    let p = document.createElement("p")
    p.textContent = quiz[currentQuestion].question
    questionDiv.append(p)

    let ol = document.createElement("ol")
    p.append(ol)
    
    for (i = 0; i < quiz[currentQuestion].answer.length; i++) {
        let li = document.createElement("li")
        li.setAttribute(`id`, `answer-${i+1}`)
        li.textContent = quiz[currentQuestion].answer[i]
        ol.append(li)
    }

    startQuizInput.remove()

    let nextQuestionInput = document.createElement("form")
    let label = document.createElement("label")
    let input = document.createElement("input")

    nextQuestionInput.setAttribute(`id`, `questions`)
    input.setAttribute('type', "submit")
    input.setAttribute('value', `Next Question`)

    buttonDiv.append(nextQuestionInput)
    nextQuestionInput.append(label)
    label.append(input)

    function nextQuestion () {
        currentQuestion = currentQuestion + 1
        questionDiv.querySelector("p").remove()
        let newP = document.createElement("p")
        newP.textContent = quiz[currentQuestion].question
        questionDiv.append(newP)
        let newOl  =document.createElement("ol")
        newP.append(newOl)
        for (i = 0; i < quiz[currentQuestion].answer.length; i++) {
            let li = document.createElement("li")
            li.setAttribute(`id`, `answer-${i + 1}`)
            li.textContent = quiz[currentQuestion].answer[i]
            newOl.append(li)    
        }
    }
        nextQuestionInput.addEventListener("submit", (event) => {
        event.preventDefault();
        nextQuestion ();
    })
}

startQuizInput.addEventListener("click", (event) => {
    event.preventDefault();
    quizStarted ();
})

