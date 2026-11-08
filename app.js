var myName = prompt("Enter Your Name");
var myClass = prompt("Enter Your class");
var myRollno = prompt("Enter Your roll number");

var english = Number(prompt("Enter Your English marks"));
var math = Number(prompt("Enter Your Math marks"));
var physics = Number(prompt("Enter Your physics marks"));
var chemistry = Number(prompt("Enter Your chemistry marks"));
var computer = Number(prompt("Enter Your computer marks"));

var totalMarks = 500;
var obtainedMarks = english + math + physics + chemistry + computer;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade = "";

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else if (percentage >= 50) {
    grade = "E";
} else {
    grade = "Fail";
}

alert("Name: " + myName + "\n" +
      "Class: " + myClass + "\n" +
      "Roll No: " + myRollno + "\n\n" +
      "Total Marks: " + totalMarks + "\n" +
      "Obtained Marks: " + obtainedMarks + "\n" +
      "Percentage: " + percentage + "%\n" +
      "Your Grade: " + grade);