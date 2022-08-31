var reverse = function(x) {
    let num = x;
    let last;
    let reverse = 0;
    let flag = false;
    if(num<0){
        flag = true;
        num = -num
    }
    while(num>0){
        last = num % 10;
        reverse = reverse*10+last;
        num = Math.floor(num/10);
    }
    if(reverse>=2147483647 || reverse<=-2147483648){
        return 0;
    }
    if(flag == true){
        return -reverse;
    }else{
        return reverse;
    }
};

console.log(reverse(2147483646))