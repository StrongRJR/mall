/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){//遍历当前数组
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return[]
};