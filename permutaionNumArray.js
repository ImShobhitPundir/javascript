var permute = function(nums) {
    let result = [];
    permutation(result,[],nums)
    return result;
}
function permutation(result,arr,nums){
    let temp;
    let rest;
    if(nums.length == 0){
        return result.push(arr)
    }
    for(let i = 0; i<nums.length; i++){
        temp = Array.from(arr)
        temp.push(nums[i])

        rest = Array.from(nums)
        rest.splice(i,1)
        //console.log(temp,rest)
        permutation(result,temp,rest)
    }
}
console.log(permute([1,2,3]))