
// it will take more time because there are two nested loops so we will use different method, we will take two pointers from both side
var maxArea1 = function(height) {
    let max = 0;
    let area, width;
    for(let i=0; i<height.length; i++){

        for(let j=0; j<height.length; j++){
            if(i<=j){
                width = j-i
            }else{
                width = i-j
            }
            if(height[i]<=height[j]){
                area = height[i]*width
            }else{
                area = height[j]*width
            }
            if(max<area){
                max = area;
            }
        }
    }
    return max;
};

var maxArea = function(height) {
    //store max area
    let max = 0;
    //two pointers
    let left = 0;
    let right = height.length-1;

    while(left<right){
        let width = right-left;
        let minLine = Math.min(height[left],height[right])
        let area = minLine*width;
        max = Math.max(max,area)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));