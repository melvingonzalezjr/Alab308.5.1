/*****
 * Part 1L Thinking Functionally
 *****/

const numArray = [1, 2, 3, 4, 5, 6]; //number array for Bullets 1, 2
const strArray = ["Alice", "Bob", "Charles", "Dan", "Eduardo"]; //string Array for Bullets 3,4

/*Bullet Point 1: Sum array of Numbers*/
function sumArray(someArray) {
  sum = 0;
  for (a of someArray) {
    sum += a;
  }
  return sum;
}
// console.log(sumArray(practiceArray))

/*Bullet Point 2: Return average*/
const avgArray = (someArray) => sumArray(someArray) / someArray.length;
// console.log(avgArray(practiceArray))

/*Bullet Point 3: Return longest string in array.*/
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

/*Bullet Point 4: Strings Longer than x */
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

/*Bullet Point 5: Recursion*/
function recursion(n) {
  if (n == 1) {
    console.log(n);
  } else {
    recursion(n - 1);
    console.log(n);
  }
}
// recursion(3);

/***** 
* Part 2: Thinking Methodically (OPTIONAL)
*****/

const part2Array = [      //Given Example Array
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

/*Bullet Point 1: Sort by age*/
function sortByAge(someArrayOfObjects) {
  return someArrayOfObjects.sort((a, b) => a.age - b.age);
}
// console.log(sortByAge(part2Array))

/*Bullet Point 2: Remove where age >50*/
function youngerThan50(someArrayOfObjects) {
  return someArrayOfObjects.filter((person) => person.age <= 50);
}
// console.log(youngerThan50(part2Array))

/*Bullet Point 3: Map Occupation-->Job and Increment age by 1*/
function mapper(someArrayOfObjects) {
  return someArrayOfObjects.map(function (object) {
    //function is just an anonymous function
    //job key is assigned to occupation key and its values
    object["job"] = object["occupation"];
    //delete occpation key
    delete object["occupation"];

    //age is incremented by 1
    object["age"] = Number(object["age"]) + 1;
    return object;
  });
}
// console.log(mapper(part2Array));

/*Bullet Point 4: reduce method to Calculate sum and avg of Ages*/
function sumAndAvgAge(someArrayOfObjects) {
  //Create ages array that will collect all ages as Number
  let ages = [];
  someArrayOfObjects.map(function (object) {
    ages.push(Number(object["age"]));
  });
  //ages.reduce sums up all values. equivalent to 'sum = 0; for(age in age) {sum += age}'
  let sumOfArray = ages.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let avgOfArray = sumOfArray / someArrayOfObjects.length;
  return `The sum of ages is ${sumOfArray}, and the average of ages is ${avgOfArray}`;
}
//console.log(sumAndAvgAge(part2Array));

/*****
* PART 3: THINKING CRITICALLY (OPTIONAL)
*****/

const person1 = { name: "Alice", age: 18 };     //two arrays created to test my code
const person2 = { name: "Bob" };

/*Bullet Point 1: Increment object's age*/
function incrementAge(person) {
  //if no age key, give one with a value of 0
  if (!person['age']) {person['age'] = 0;}
  //increment by 1
  person['age'] += 1;

  //create or change Date object
  person['updated_at'] = new Date();
}
// incrementAge(person1)
// incrementAge(person2)
// console.log(person1)
// console.log(person2)

/*Bullet Point 2: Same as 1, but now doing it to a copy */
function incrementAgeCopy(person) {
  //copy
  copyCat = { ...person };
  //if no age key, give one with a value of 0
  if (!copyCat["age"]) {
    copyCat["age"] = 0;
  }
  //increment by 1
  copyCat["age"] += 1;

  //create or change Date object
  copyCat["updated_at"] = new Date();

  return copyCat;
}
//below logs verify person1 and person2 were never changed
// console.log(person1);
// console.log(person2);
// console.log("-----------");
// console.log(incrementAgeCopy(person1));
// console.log(incrementAgeCopy(person2));
// console.log("-----------");
// console.log(person1);
// console.log(person2);


/*Thought Experiment: 
Since Date is an object, modifying it in a copy of the person object, would make changes inplace. To created changes and still have the original date in place, we would need to make a copy, either of just the date object, or the person object from which it is referenced. 
*/
