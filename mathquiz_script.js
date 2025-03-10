let currentOperation = 'addition';
let currentProblem = generateProblem();

function setOperation(operation) {
    currentOperation = operation;
    next();
}

function generateProblem() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let correctAnswer;

    switch (currentOperation) {
        case 'addition':
            correctAnswer = a + b;
            document.getElementById('operation').textContent = '+';
            break;
        case 'subtraction':
            if (a < b) [a, b] = [b, a];
            correctAnswer = a - b;
            document.getElementById('operation').textContent = '-';
            break;
        case 'multiplication':
            correctAnswer = a * b;
            document.getElementById('operation').textContent = '×';
            break;
        case 'division':
            while (a % b !== 0 || a === b) {
                a = Math.floor(Math.random() * 10) + 1;
                b = Math.floor(Math.random() * 10) + 1;
            }
            correctAnswer = a / b;
            document.getElementById('operation').textContent = '÷';
            break;
    }

    document.getElementById('a').textContent = a;
    document.getElementById('b').textContent = b;
    document.getElementById('studentAnswer').value = '';
    document.getElementById('showStudentAnswer').textContent = '';
    document.getElementById('correctAnswer').textContent = '';
    document.getElementById('result').textContent = '';

    return { a, b, correctAnswer };
}

function compare() {
    const studentAnswer = document.getElementById('studentAnswer').value;
    const scoreElement = document.getElementById("scoreDisplay");
    let currentScore = parseInt(scoreElement.textContent);

    if (studentAnswer === "") {
        alert("⏳ Enter an answer before checking!");
        return;
    }

    let result;
    if (parseInt(studentAnswer) === currentProblem.correctAnswer) {
        result = "🎉 Correct!";
        currentScore = Math.min(currentScore + 7, 100);
    } else {
        result = "❌ Try Again!";
        currentScore = Math.max(currentScore - 3, 0);
    }

    if (currentScore === 100) {
        result = "🏆 You Completed the Quiz!";
        document.getElementById('next').disabled = true;
    }

    document.getElementById("scoreDisplay").textContent = currentScore;
    updateProgressBar(currentScore);
    document.getElementById("showStudentAnswer").textContent = studentAnswer;
    document.getElementById("correctAnswer").textContent = currentProblem.correctAnswer;
    document.getElementById("result").textContent = result;
}

function next() {
    currentProblem = generateProblem();
}

function updateProgressBar(score) {
    document.getElementById("progressFill").style.width = `${score}%`;
}
