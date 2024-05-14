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
