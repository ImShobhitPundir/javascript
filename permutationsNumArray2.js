var permuteUnique = function(nums) {
    let result = [];
    nums.sort((a,b)=>a-b)
    permutations(result,[],nums)
    return result;
};

function permutations(result,arr,nums){
    let temp;
    let rest;

    if(nums.length == 0){
        return result.push(arr)
    }
    for(let i = 0; i<nums.length; i++){
        if (nums[i] === nums[i - 1]){
         continue;
        }
        temp = Array.from(arr);
        temp.push(nums[i])

        rest = Array.from(nums);
        rest.splice(i,1)
        //console.log(temp,rest)
        permutations(result,temp,rest)
    }
}

console.log(permuteUnique([1,1,2,1]))