var isPowerOfTwo = function(n) {
    if(n==0){
        return false;
    }else{
        //let x = 0;
        while(n != 1){
            if(n%2 != 0){
                return false;
            }
           n = n/2
           //x++
        }
        return true
    }
};

console.log(isPowerOfTwo(512))