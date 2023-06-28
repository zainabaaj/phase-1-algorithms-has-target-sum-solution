function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
*/

/* 
  Add your pseudocode here
  - Create an empty set called seenNumbers
  - Iterate over the array of numbers
    - For each number, calculate the complement by subtracting it from the target
    - Check if the complement is present in the seenNumbers set
      - If present, return true as we have found a pair that adds up to the target
    - If the complement is not present, add the current number to the seenNumbers set
  - If we reach the end of the array without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  The function solves the problem by using a set to keep track of the numbers we have encountered so far. 
  It iterates over the array of numbers and for each number, calculates the complement by subtracting it from the target.
  If the complement is already present in the set, it means we have found a pair of numbers that add up to the target, so the function returns true.
  If the complement is not present, the current number is added to the set for future reference.
  If the loop completes without finding a pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
