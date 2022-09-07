var maxProfit2 = function(prices) {
    let maxP=0;
    let val;
    for(let i=0;i<prices.length; i++){
        for(let j=i;j<prices.length; j++){
            if(prices[i]<prices[j]){
                val = prices[j]-prices[i]
                maxP = Math.max(maxP,val);
            }
        }        
    }
    return maxP
};

var maxProfit = function(prices) {
        let maxP = 0;
        if(prices == null || prices.length <=1 )return maxP;
        let min = prices[0];
        for(let i=1; i< prices.length; i++){
            if(prices[i] > min){
                maxP = Math.max(maxP, prices[i] - min);
            }else{
                min = prices[i];
            }
        }

        return maxP;
};


console.log(maxProfit([4,2,1]))