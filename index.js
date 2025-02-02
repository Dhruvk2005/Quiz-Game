let quee = document.querySelector("#que");
const opt = document.querySelectorAll(".optionn");
let submit = document.querySelector("#btn");
let displayresult = document.querySelector(".result")
let containerdisplay = document.querySelector(".container")
const answers = document.querySelectorAll(".answer");

const quizdata = [
    {
        question: "1. What is the primary purpose of MongoDB in the MERN stack?",
        options: [
            "A) Frontend framework",
            "B) Backend server",
            "C) NoSQL Database",
            "D) Authentication tool",
        ],
        correct: 2,
    },
    {
        question: "2. Which of the following is used to build the frontend in the MERN stack?",
        options: [
            "A) Node.js",
            "B) Express.js",
            "C) React.js",
            "D) MongoDB",
        ],
        correct: 2,
    },
    {
        question: "3. What is Node.js mainly used for in the MERN stack?",
        options: [
            "A) Designing UI",
            "B) Running JavaScript on the server",
            "C) Storing data",
            "D) Creating animations",
        ],
        correct: 1,
    },
    {
        question: "4. Which of the following is NOT a part of the MERN stack?",
        options: [
            "A) Express.js",
            "B) Angular",
            "C) React.js",
            "D) Node.js",
        ],
        correct: 1,
    },
    {
        question: "5. Which language is primarily used in the MERN stack?",
        options: [
            "A) Python",
            "B) Java",
            "C) C++",
            "D) JavaScript",
        ],
        correct: 3,
    }
];

let currentQuiz = 0;
let score = 0;
let selectedAns = null;

const loadData = () => {
    const { question, options } = quizdata[currentQuiz];
    quee.innerHTML = question;
    selectedAns = null;

    answers.forEach(answer => answer.checked = false)
    
    opt.forEach((optionelm, index) => {
        optionelm.innerHTML = options[index];
        optionelm.style.backgroundColor = "";

        optionelm.onclick = () => {
            selectedAns = index;
            opt.forEach(opt => opt.style.backgroundColor = "");
            optionelm.style.backgroundColor = "black";
        };
    });
};

const showResult = () => {
    displayresult.innerHTML = `<h2>Quiz Completed! 🎉</h2><p>You got ${score} out of ${quizdata.length} correct!</p>`;
    displayresult.style.display = "block"
    containerdisplay.style.display = "none"
    submit.style.display = "none";
};

const changedata = () => {
    submit.addEventListener("click", () => {
        if (selectedAns === null) {
            alert("Please select an answer!");
            return;
        }

        if (selectedAns === quizdata[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizdata.length) {
            loadData();
        } else {
            showResult();
        }
    });
};

loadData();
changedata();
