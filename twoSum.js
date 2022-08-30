
var twoSum = function(nums, target) {
    let total;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            total = nums[i]+nums[j]
            if(total == target){
                let arr = [i,j]
                return arr;
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9))