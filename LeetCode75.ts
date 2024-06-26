/**
 * 1768. Merge Strings Alternately
 * ou are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
 * @param word1 
 * @param word2 
 * @returns 
 */

function mergeAlternately(word1: string, word2: string): string {
  let merged = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    merged += word1[i];
    merged += word2[j];
    i++;
    j++;
  }

  merged += word1.slice(i);
  merged += word2.slice(j);

  return merged;
}

console.log(mergeAlternately("abc", "pqr"));

//1071. Greatest Common Divisor of Strings

//approach
/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
 * 
 */

function gdc(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 *
 * @param candies
 * @param extraCandies
 * @returns
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  //make empty array of res  = [];

  // get the maximum candy
  const maxCandies = Math.max(...candies);
  const result: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 */

/**
 * 
  nums = [1,7,3,6,5,6]

  if pivot i  = 0;
  leftSum = 0;
  right = 7+3+6+5+6 = 27



  if pivot i = 1;
  leftSum = 1  = 1;
  right = 3+6+5+6 = 20


  if pivot i = 2;
  leftSum = 1+7  = 8;
  right = 6+5+6 = 17


  if pivot i = 3;
  leftSum = 1+7+3 = 11;
  right = 5+6 = 11      stop here and return index


  if pivot i = 4;
  leftSum = 1+7+3+6+5 = 22;
  right = 6 = 6


  if pivot i = 5;
  leftSum = 1+7+3+6+5+6 = 28;
  right = 0 = 0



 */

function pivotIndex(nums: number[]): number {
  let sum = nums.reduce((a, b) => a + b, 0);
  let rightSum = sum;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    leftSum = sum - rightSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }
    // let leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0);
    // let rightSum = sum - leftSum - nums[i];
    // if( leftSum  === rightSum) {
    //   return i;
    // }
    // console.log("i = ", i, " leftSum = ", leftSum, " rightSum = ", rightSum);
  }
  // for (let i = 0; i < nums.length - 1; i++) {
  //   let m = 0;
  //   let leftSum = 0;

  //   let rightSum = 0;

  //   while (m < i) {
  //     leftSum += nums[m];
  //     m++;
  //   }

  //   for (let n = i + 1; n < nums.length; n++) {
  //     rightSum += nums[n];
  // }

  //   if (leftSum === rightSum) {
  //     pivotIndex  = i;
  //   }
  //   // console.log("i = ", i, " leftSum = ", leftSum, " rightSum = ", rightSum);
  // }

  return -1;
}

//  const nums = [1, 7, 3, 6, 5, 6];
// const nums = [1,2,3];

// const nums = [2,1,-1];
// const nums = [-1,-1,0,0,-1,-1];

const nums = [-1, -1, 0, 1, 1, 0];

console.log(pivotIndex(nums));
