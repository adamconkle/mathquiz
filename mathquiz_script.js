/* 
1) Get two random #s. ✅
2) Multiply those two #s. ✅
3) Input box. ✅
4) Check-answer button. ✅
5) Compare 1 & 2. ✅
6) If same, give "Correct". ✅
7) If not same, give "Try Again". ✅
8) Check answer button adds or reveals Correct Answer.✅
9) Check answer button adds "Your answer was..." ✅
*/




    let currentOperation = 'addition'; // Default operation
    let currentProblem = generateProblem(); // Initial problem setup

    // Function to set the operation type
    function setOperation(operation) {
      currentOperation = operation;
      next(); // Generate a new problem with the selected operation
    }

    // Function to generate a new problem based on the selected operation
    function generateProblem() {
      let a = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      let b = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      let correctAnswer;

      // Determine the correct answer based on the selected operation
      switch (currentOperation) {
        case 'addition':
          correctAnswer = a + b;
          document.getElementById('operation').textContent = '+';
          break;
        case 'subtraction':
          if (a < b) {
            // Ensure a is always greater than or equal to b to avoid negative answers
            [a, b] = [b, a];
          }
          correctAnswer = a - b;
          document.getElementById('operation').textContent = '-';
          break;
        case 'multiplication':
          correctAnswer = a * b;
          document.getElementById('operation').textContent = '×';
          break;
        case 'division':
          // Ensure the numbers are divisible to avoid decimals
          while (a % b !== 0) {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
          }
          correctAnswer = a / b;
          document.getElementById('operation').textContent = '÷';
          break;
      }

      // Display the numbers in the HTML
      document.getElementById('a').textContent = a;
      document.getElementById('b').textContent = b;

      // Reset feedback sections
      document.getElementById('showStudentAnswer').textContent = '';
      document.getElementById('correctAnswer').textContent = '';
      document.getElementById('result').textContent = '';
      document.getElementById('studentAnswer').value = ''; // Reset input field

      // Return the current problem values for comparison
      return { a, b, correctAnswer };
    }

    // Function to compare the student's answer with the correct answer
    function compare() {
      let studentAnswer = document.getElementById('studentAnswer').value;
      let result;

      // Check if the student's answer is correct
      if (parseInt(studentAnswer) === currentProblem.correctAnswer) {
        result = "Correct!";
      } else {
        result = "Try Again!";
      }

      // Display the result, student's answer, and correct answer
      document.getElementById("showStudentAnswer").textContent = studentAnswer;
      document.getElementById("correctAnswer").textContent = currentProblem.correctAnswer;
      document.getElementById("result").textContent = result;
    }

    // Function to generate a new problem when the "Next" button is clicked
    function next() {
      currentProblem = generateProblem(); // Re-generate the problem and update variables
    }
