function isSorted(nums){
    for(i=0; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
            return false;
        }
    }
    return true;
}
var sortColors = function(nums) {
    for(i=0; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
            [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
        }
    }
    if(!isSorted(nums)){
        sortColors(nums)
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))