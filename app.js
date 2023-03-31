const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const users = [{ name: "joe" }, { name: "julie" }, { name: "rick" }];

// .forEach. // we never assign a varible to a for each statement
// can build a new array wit for eafch but .map is better

const newArr = [];

arr.forEach(function (num) {
  if (num % 2 === 0)
    // push statemnt, pushes everything thats even into new array
    newArr.push(num);
  // console.log(num)
});
// same statement as above with es6
// arr.forEach(num => num % 2 === 0 && newArr.push(num))

console.log(newArr);

// .find()
const results = users.find(function (user) {
  if (user.name[0] === "j") {
    return user;
  }
});

// only returns joe becuSE find looks for the first matching item in an array
console.log(results);

// .findIndex()

const userIndex = users.findIndex(function (user) {
  if (user.name === "rick") {
    return true;
  }
});
console.log(userIndex);

// # .forEach
//     Returns: Undefined
//     Purpose: Used in place of a for-loop
//         Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
//                 forEach will always loop the entire length of the array.

// # .find()
//     Returns: The first item it finds in the array that matches your criteria
//     Purpose: Finding an item in an array

// # .findIndex()
//     Returns: The index number of the first item it finds in the array that matches your criteria
//     Purpose: Finding the index number of an item in an array

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"];

// .some()

const result = names.some(function (name) {
  if (name[0] === "S") {
    return true;
  }
});
console.log(result);

// .every()

const resultz = names.every(function (name) {
  if (name[0] === "J") {
    return true;
  }
});
console.log(resultz);

// # .some()
//     Returns: Returns true if at least one item in the array matches your criteria, false otherwise
//     Purpose: To see if something exists in an array

// # .every()
//     Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
//     Purpose: TO see if Everything in an array matches your criteria

const array = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

// .sort() needs two paramaeters
// this returns numbers least to greatest
array.sort(function (a, b) {
  return a - b;
});
console.log(array);

// # .sort()
//     Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
//     Purpose: To sort an unsorted array of items.

// 1) Sort an array from smallest number to largest

const numbers = [1, 3, 5, 2, 90, 20];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

const numbers2 = [1, 3, 5, 2, 90, 20];

numbers2.sort(function (a, b) {
  return b - a;
});

console.log(numbers2);

const shortest = ["dog", "wolf", "by", "family", "eaten"];

shortest.sort(function (a, b) {
  return a.length - b.length;
});
console.log(shortest);

const alpha = ["dog", "wolf", "by", "family", "eaten"];

alpha.sort();

console.log(alpha);

const byAge = [
  { name: "Quiet Samurai", age: 22 },
  { name: "Arrogant Ambassador", age: 100 },
  { name: "Misunderstood Observer", age: 2 },
  { name: "Unlucky Swami", age: 77 },
];

byAge.sort(function(a, b){
    return a.age - b.age;
})

console.log(byAge)