var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let reverse = 0;
    let tempx = x;
    let last;
    while(tempx > 0){
        last = tempx % 10;
        reverse = reverse * 10 + last;
        tempx = Math.floor(tempx/10);
    }
    return reverse===x;
};

console.log(isPalindrome(11))