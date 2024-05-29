// // 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

function uniqueOccurrences(arr: number[]): boolean {
  // let map = new Map();

  // for(let i = 0; i < arr.length; i++){
  //     if(map.has(arr[i])){
  //         return true;
  //     }else{
  //         map.set(arr[i], 1);
  //     }
  // }
  // return false;
  let countMap = new Map();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let occuranceSet = new Set(countMap.values());
  return occuranceSet.size === countMap.size;
}

console.log("uniqueOccurrences = ", uniqueOccurrences([2, 1, 3]));

/**
 * 2390. Removing Stars From a String
 * 
 * You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
 

Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and stars *.
The operation above can be performed on s.
 * 
 * 
 */

function removeStars(s: string): string {
  let stack: string[] = [];
  for (let char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

let s = "leet**cod*e";

// console.log("removeStars = ", removeStars(s));

// 735. Asteroid Collision

function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
    //   while (stack[stack.length - 1] > 0) {
    //     if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
    //       stack.pop();
    //       break;
    //     } else if (stack[stack.length - 1] < Math.abs(asteroids[i])) {
    //       break;
    //     } else {
    //       stack.pop();
    //     }
    //   }
    //   if (stack.length === 0 || stack[stack.length - 1] < 0) {
    //     stack.push(asteroids[i]);
    //   }

      while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroids[i])) {
        stack.pop();
      }
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      } else if (stack[stack.length - 1] === Math.abs(asteroids[i])) {
        stack.pop();
      }
     }
  }

  return stack;
}

let asteroids = [5, 10, -5];

console.log("asteroidCollision = ", asteroidCollision(asteroids));
