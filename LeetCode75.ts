// /**
//  * 1768. Merge Strings Alternately
//  * ou are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.
//  * @param word1
//  * @param word2
//  * @returns
//  */

// function mergeAlternately(word1: string, word2: string): string {
//   let merged = "";
//   let i = 0;
//   let j = 0;

//   while (i < word1.length && j < word2.length) {
//     merged += word1[i];
//     merged += word2[j];
//     i++;
//     j++;
//   }

//   merged += word1.slice(i);
//   merged += word2.slice(j);

//   return merged;
// }

// console.log(mergeAlternately("abc", "pqr"));

// //1071. Greatest Common Divisor of Strings

// //approach
// /**
//  * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.
//  *
//  */

// function gdc(a: number, b: number): number {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// /**
//  *
//  * @param candies
//  * @param extraCandies
//  * @returns
//  */

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   //make empty array of res  = [];

//   // get the maximum candy
//   const maxCandies = Math.max(...candies);
//   const result: boolean[] = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= maxCandies) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }

//   return result;
// }

// /**
//  * Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000
//  */

// /**
//  *
//   nums = [1,7,3,6,5,6]

//   if pivot i  = 0;
//   leftSum = 0;
//   right = 7+3+6+5+6 = 27

//   if pivot i = 1;
//   leftSum = 1  = 1;
//   right = 3+6+5+6 = 20

//   if pivot i = 2;
//   leftSum = 1+7  = 8;
//   right = 6+5+6 = 17

//   if pivot i = 3;
//   leftSum = 1+7+3 = 11;
//   right = 5+6 = 11      stop here and return index

//   if pivot i = 4;
//   leftSum = 1+7+3+6+5 = 22;
//   right = 6 = 6

//   if pivot i = 5;
//   leftSum = 1+7+3+6+5+6 = 28;
//   right = 0 = 0

//  */

// function pivotIndex(nums: number[]): number {
//   let sum = nums.reduce((a, b) => a + b, 0);
//   let rightSum = sum;
//   let leftSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     rightSum -= nums[i];
//     leftSum = sum - rightSum - nums[i];

//     if (leftSum === rightSum) {
//       return i;
//     }
//     // let leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0);
//     // let rightSum = sum - leftSum - nums[i];
//     // if( leftSum  === rightSum) {
//     //   return i;
//     // }
//     // console.log("i = ", i, " leftSum = ", leftSum, " rightSum = ", rightSum);
//   }
//   // for (let i = 0; i < nums.length - 1; i++) {
//   //   let m = 0;
//   //   let leftSum = 0;

//   //   let rightSum = 0;

//   //   while (m < i) {
//   //     leftSum += nums[m];
//   //     m++;
//   //   }

//   //   for (let n = i + 1; n < nums.length; n++) {
//   //     rightSum += nums[n];
//   // }

//   //   if (leftSum === rightSum) {
//   //     pivotIndex  = i;
//   //   }
//   //   // console.log("i = ", i, " leftSum = ", leftSum, " rightSum = ", rightSum);
//   // }

//   return -1;
// }

// //  const nums = [1, 7, 3, 6, 5, 6];
// // const nums = [1,2,3];

// // const nums = [2,1,-1];
// // const nums = [-1,-1,0,0,-1,-1];

// const nums = [-1, -1, 0, 1, 1, 0];

// console.log(pivotIndex(nums));

/**
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 */

/**
 * 
 * Approach
 * Example 1: gain = [-5, 1, 5, 0, -7]
 * We start at point 0 with an altitude of 0.

Point: 0  1  2  3  4  5
Gain:    -5  1  5  0 -7
Altitude: 0 -5 -4  1  1 -6

At point 1, the gain is -5, so the new altitude is 0 + (-5) = -5.

At point 2, the gain is 1, so the new altitude is -5 + 1 = -4.
At point 3, the gain is 5, so the new altitude is -4 + 5 = 1.
At point 4, the gain is 0, so the new altitude is 1 + 0 = 1.
At point 5, the gain is -7, so the new altitude is 1 + (-7) = -6.
 */

// function largestAltitude(gain: number[]): number {
//   let altitude = 0;
//   let maxAltitude = 0;

//   for (let point = 0; point < gain.length; point++) {
//     altitude += gain[point];
//     maxAltitude = Math.max(maxAltitude, altitude);
//   }

//   return maxAltitude;
// }

// // let gain = [-5, 1, 5, 0, -7];
// let gain = [-4, -3, -2, -1, 4, 3, 2];

// console.log("largestAltitude = " + largestAltitude(gain));

/**
 * 
 *The problem asks us to determine if we can plant n new flowers in the given flowerbed array without violating the rule that no two flowers can be adjacent.
Example 1: flowerbed = [1, 0, 0, 0, 1], n = 1
In this example, we have a flowerbed with two plots already occupied (1) and three empty plots (0). We need to check if we can plant one more flower (n = 1) without violating the no-adjacent-flowers rule.
Copy codeFlowerbed: [1, 0, 0, 0, 1]
             ^     ^
We can see that there are two empty plots (0) between the occupied plots (1). Since we need to plant only one flower (n = 1), we can safely plant it in the middle empty plot without violating the rule.
Copy codeFlowerbed: [1, 0, 1, 0, 1]
Therefore, the output is true.
Example 2: flowerbed = [1, 0, 0, 0, 1], n = 2
In this example, we have the same flowerbed as before, but we need to plant two flowers (n = 2).
Copy codeFlowerbed: [1, 0, 0, 0, 1]
             ^     ^
As we can see, there is only one empty plot (0) between the occupied plots (1). If we plant two flowers in the empty plots, they will be adjacent, violating the no-adjacent-flowers rule.
Copy codeFlowerbed: [1, 1, 0, 1, 1] (Invalid)
Therefore, the output is false.
The solution to this problem involves iterating through the flowerbed array and checking for empty plots (0) where we can plant new flowers. We need to consider the cases where the plot is at the beginning or end of the flowerbed, as well as the cases where the plot is in the middle.
Here's a step-by-step illustration of the solution:

Initialize a variable count to 0 to keep track of the number of flowers that can be planted.
Iterate through the flowerbed array:
a. If the current plot is empty (0) and the previous and next plots are also empty (or at the beginning/end of the flowerbed), we can plant a flower in the current plot. Increment count and mark the current and adjacent plots as occupied (1).
b. If the current plot is occupied (1), skip to the next plot.
After iterating through the entire flowerbed, compare the value of count with n. If count is greater than or equal to n, return true, otherwise, return false.

By following this approach, we can determine if it is possible to plant n new flowers in the given flowerbed without violating the no-adjacent-flowers rule.
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let emptyPlots = 0;
  const length = flowerbed.length;
  for (let i = 0; i < flowerbed.length; i++) {
    let currentBed = flowerbed[i];



    if (currentBed == 0) {
      const emptyPrevPlot = (i === 0) || (flowerbed[i - 1] === 0);
      const emptyNextPlot = (i === length - 1) || (flowerbed[i + 1] === 0);

      if (emptyPrevPlot && emptyNextPlot) {
        flowerbed[i] = 1;
        emptyPlots++;
      }
      
    } 
      
  }

  return emptyPlots === n;
}

// let flowerbed = [1, 0, 0, 0, 1],
//   n = 1;
// let flowerbed = [1,0,0,0,1], n = 2;

// let flowerbed = [1, 0, 0, 0, 0, 1],
//   n = 2;


// let flowerbed = [0, 0, 1],
//   n = 1;

let flowerbed = [1,0, 0, 0, 1],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));
