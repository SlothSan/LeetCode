/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let mapOfNumbers = {};
  let twoIndexes = [];

  //create a map of all nums in nums with there indexes
  for (let i = 0; i < nums.length; i++) {
    mapOfNumbers[nums[i]] = i;
  }

  //loop through the nums array, look for the target in the numsMap if present push to the array and return.
  for (let i = 0; i < nums.length; i++) {
    let currTarget = target - nums[i];
    if (mapOfNumbers[currTarget] !== null && mapOfNumbers[currTarget] !== i) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNumbers[currTarget]);
      break;
    }
  }

  return twoIndexes;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
