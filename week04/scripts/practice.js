//  problem 1
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return '<li>${step{</li>';
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

// problem 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Problem 3
const studentGPA = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Problem 4
const foods = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortFoods = foods.filter((word) => word.length < 6);

// Problem 5
const arrayNumbers = [12, 34, 21, 54];
const luckyNumber = 21;

let luckIndex = arrayNumbers.indexOf(luckyNumber);

