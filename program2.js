function smallestMissingPositiveInteger(nums) {
// Remove non-positive integers
nums = nums.filter(num => num > 0);

// Sort the array
nums.sort((a, b) => a - b);

// Initialize smallest positive integer
let smallest = 1;

// Find the smallest missing positive integer
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === smallest) {
    smallest++;
  } else if (nums[i] > smallest) {
    break;
  }
}

return smallest;
}

module.exports = smallestMissingPositiveInteger;
