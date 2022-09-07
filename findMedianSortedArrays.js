var findMedianSortedArrays = function(nums1, nums2) {
    totalLength = nums1.length+nums2.length;
    let median;
    const nums3 = nums1.concat(nums2);
    nums3.sort((a,b)=>a-b)
    //console.log(nums3)
    if(totalLength % 2 == 0){
        let l = (totalLength/2)-1;
        median = (nums3[l]+nums3[l+1])/2;
    }else{
        let l = Math.floor(totalLength/2);
        median = nums3[l];
    }
    return median;
}

console.log(findMedianSortedArrays([1,2],[3,4]))