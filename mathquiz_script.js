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



// Provides two random #s to Multiply
let a = document.getElementById("a").innerHTML =
Math.floor(Math.random() * 10);

let b = document.getElementById("b").innerHTML =
Math.floor(Math.random() * 10);

//Multiplies the two random #s.
let z = a * b;


// Compare Student Answer vs Correct Answer
const resultDisplay = document.getElementById('result')

function compare() {
    let studentAnswer =             document.getElementById('studentAnswer').value;
      if (studentAnswer == z) {
        result = "Correct!";
      }    
      else {
        result = "Try Again!";
      }
// Display 
    resultDisplay.innerHTML = result
  document.getElementById("correctAnswer").innerHTML = a * b;
    document.getElementById("showStudentAnswer").innerHTML = studentAnswer;
    }
