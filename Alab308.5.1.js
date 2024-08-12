/*Part 1L Thinking Functionally*/

const numArray = [1, 2, 3, 4, 5, 6]; //number array
const strArray = ["Alice", "Bob", "Charles", "Dan", "Eduardo"];

//////Sum array of Numbers
function sumArray(someArray) {
  sum = 0;
  for (a of someArray) {
    sum += a;
  }
  return sum;
}
// console.log(sumArray(practiceArray))

/////Return average
const avgArray = (someArray) => sumArray(someArray) / someArray.length;
// console.log(avgArray(practiceArray))

/////Return longest string in array.
function longestStr(someArray) {
  let longest = someArray[0];
  for (a of someArray) {
    if (a > longest) {
      longest = a;
    }
  }
  return a;
}
// console.log(longestStr(strArray));

/////Strings Longer than x
function longerThan(someArray, x) {
  let longerThanArray = [];
  for (a of someArray) {
    if (a.length > x) {
      longerThanArray.push(a);
    }
  }
  return longerThanArray;
}
// console.log(longerThan(strArray, 3))

/////Recursion
function recursion(n) {
  if (n == 1) {
    console.log(n);
  } 
  else {
    recursion(n-1);
    console.log(n);
  }
}
// recursion(3);

/*Part 2: Thinking Methodically*/

const part2Array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },   //Example Array
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//Sort by age
function sortByAge(someArrayOfObjects) {
    return someArrayOfObjects.sort((a, b) => a.age - b.age);
} 
// console.log(sortByAge(part2Array))

//Remove where age >50
function youngerThan50(someArrayOfObjects) {
    return someArrayOfObjects.filter((person) => person.age <= 50);
}
// console.log(youngerThan50(part2Array))

// Map Occupation-->Job and Increment age by 1
// function mapper(someArrayOfObjects) {
//     return someArrayOfObjects.map((x) => )
// }








