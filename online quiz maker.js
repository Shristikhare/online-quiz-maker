let currentQuestion = 0;
const questions = [
    {
        question: "Have you practiced sport or any physical activity out of your working hours at least 30 min or more during the last month?",
        options: [
            "3 times or more per week",
            "1 or 2 times per week",
            "Less than 4 times per month",
            "I don’t practice sport during the month"
        ]
    },
    {
        question: "How often do you eat fruits and vegetables?",
        options: [
            "Every day",
            "3-4 times a week",
            "1-2 times a week",
            "Rarely"
        ]
    },
    {
        question: "How much water do you drink daily?",
        options: [
            "More than 2 liters",
            "1-2 liters",
            "Less than 1 liter",
            "I don't track my water intake"
        ]
    }
];

function loadQuestion() {
    const questionHeader = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const quizOptions = document.querySelectorAll('.quiz-option span');

    questionHeader.innerText = Question ${currentQuestion + 1}/${questions.length};
    questionText.innerText = questions[currentQuestion].question;
    
    quizOptions.forEach((option, index) => {
        option.innerText = questions[currentQuestion].options[index];
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            selectedOption.checked = false; // Uncheck previous option
        } else {
            alert('Quiz Completed!');
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);