const quizData = [
    {
       question: "What does HTML stand for?",
       a: "Hyper Text Markup Language",
       b: "High Tech Markup Language",
       c: "Hyperlink Text Markup Language",
       d: "Home Tool Markup Language",
       correct: "a"
    },
    {
       question: "What is the purpose of a front-end web development framework like React or Angular?",
       a: "To manage databases and server-side logic",
       b: "To create a visually appealing user interface",
       c: "To handle server-side routing",
       d: "To interact with web servers",
       correct: "b"
    },
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Madrid",
        correct: "b"
    },
    {
        question: "Which language is used for web apps?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Creative Style System",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
    }
   ];

let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You scored ${score} out of ${quizData.length}</h2>
                <button onclick="location.reload()">Try Again</button>
            `;
        }
    }
});
