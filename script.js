
const quiz = [
    {
    question: "What was my first job out of College?",
    answer: [
        "Equity Research Analyst at Citigroup covering the large-cap Internet sector", 
        "Performance Marketing VP at digital marketing agency",
        "Software Engineer", 
        "Founder and CEO, Broadway Community"
    ],
    explanation: "I started my career in Finance, spending 2 years at Citigroup as an Equity Research Analyst covering the large-cap internet sector. I analyzed financial statement models and conducted industry research to craft investment theses, write research reports and advise institutional investors on stock decisions."
},
    {
    question: "In my last role, I was tasked with growing my client's online sales. In the 6 months from June to December of 2023, how much did the brand grow?",
    answer: [
        "10%",
        "50%", 
        "150%", 
        "1,500%"
    ],
    explanation: "From June to December, the brand grew its online sales by 1,500%. Through a number of initiatives I pushed, we grew from ~$100k in June to nearly $2mn in December."
},
    {
    question: "How many Broadway Shows have I seen?",
    answer: [
        "0",
        "10",
        "20",
        "50+"
    ],
    explanation: "I have seen over 50 Broadway shows. The Hamilton soundtrack turned me on to Broadway a few years ago, so I started entering the lottery to win tickets. I entered the lottery for 50 friends on condition that they bring me if they won. After seeing Hamilton, I started going to other shows and became obsessed."
},
    {
    question: "How did I propose to my wife?",
    answer: [
        "I surprised her by flying to Panama, made a reservation at our favorite restaurant and proposed after they brought dessert.",
        "Since her biggest dream is to be a contestant on Survivor, I organized a 3-day Survivor game with 11 players. We had tribal councils and blindsides, reward and immunity challenges, hidden immunity idols and confessionals. After the final tribal council, I set up the area with tiki torches, pictures, hand-written letters, roses and candles and when she came back, I proposed.",
        "I set up a picnic in Central Park with her favorite foods: pizza and mac n cheese. I customized a deck of playing cards with one saying will you marry me. We played war until we got to the final card and then I proposed.",
        "Skydiving!"
    ],
    explanation: "My wife is a huge Survivor fan, so I spent months crafting an elaborate game of Survivor and proposed at the end of it. It was a huge success and I hope to create another version of the game for friends."
},
    {
    question: "At Citigroup, I was the lead associate on conducting due diligence for a stock that was launching its IPO. I flew to its headquarters, met with the executive team, published a research report launching coverage and led 20+ investor calls during the company's roadshow. What company was this?",
    answer: [
        "Google",
        "Shopify",
        "Roku",
        "Spotify"
    ],
    explanation: "Roku"
}
]
let currentQuestion = 0

let startQuizInput = document.querySelector("#start-quiz")
let questionDiv = document.querySelector("#question")
let answersDiv = document.querySelector('#show-answers')
let buttonDiv = document.querySelector(`#next-question-button`)

// create function that launches the quiz: add question; add answers; change button
function quizStarted () {
    let questionP = document.createElement("p")
    questionP.textContent = quiz[currentQuestion].question
    questionDiv.append(questionP)

    let answerOl = document.createElement("ol")
    questionP.append(answerOl)
    
    for (i = 0; i < quiz[currentQuestion].answer.length; i++) {
        let answerLi = document.createElement("li")
        answerLi.setAttribute(`id`, `answer-${i+1}`)
        answerLi.textContent = quiz[currentQuestion].answer[i]
        answerOl.append(answerLi)
    }

    startQuizInput.remove()

    let submitAnswerInput = document.createElement('form')
    let label = document.createElement(`label`)
    let input = document.createElement(`input`)

    submitAnswerInput.setAttribute(`id`, `seeAnswers`)
    input.setAttribute('type', "submit")
    input.setAttribute('value', `Submit Answer`)

    answersDiv.append(submitAnswerInput)
    submitAnswerInput.append(label)
    label.append(input)

    function showAnswer () {
        let answerP = document.createElement('p')
        answerP.textContent = quiz[currentQuestion].explanation
        buttonDiv.append(answerP)

        let nextQuestionInput = document.createElement("form")
        let label = document.createElement("label")
        let input = document.createElement("input")

        nextQuestionInput.setAttribute(`id`, `questions`)
        input.setAttribute('type', "submit")
        input.setAttribute('value', `Next Question`)

        answerP.append(nextQuestionInput)
        nextQuestionInput.append(label)
        label.append(input)

        function nextQuestion () {
            currentQuestion = currentQuestion + 1
            questionDiv.querySelector("p").remove()
            buttonDiv.querySelector("p").remove()
            let newP = document.createElement("p")
            newP.textContent = quiz[currentQuestion].question
            questionDiv.append(newP)
            let newOl = document.createElement("ol")
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
    
    submitAnswerInput.addEventListener("submit", (event) => {
        event.preventDefault()
        showAnswer ()
    })
}

startQuizInput.addEventListener("click", (event) => {
    event.preventDefault();
    quizStarted ();
})
