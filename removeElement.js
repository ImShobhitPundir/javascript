var removeElement = function(nums, val) {
    let count = 0;
    for(i=0;i<nums.length; i++){
        if(nums[i]==val){
            continue;
        }
        nums[count]=nums[i]
        count++
    }
    nums.length = count
    return nums;
};

console.log(removeElement([3,2,2,3],3))