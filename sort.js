let arr = [2,8,4,3,7,1,11,6,99,43,12,0];
//console.log(arr)
let sortedArray = [];
const arraySorted = (array) =>{
    for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
            return false
        }
    }
    return true;
}
function arrayFunction(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    if(!arraySorted(arr)){
        //console.log("false",arr)
        arrayFunction(arr)
    }
    
}


//arr.sort(function(a, b){return a - b})
arrayFunction(arr) 
console.log(arr)
