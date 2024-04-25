function smallestMissingPositiveInteger(nums) {

nums = nums.filter(num => num > 0);


nums.sort((a, b) => a - b);

let smallest = 1;


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
