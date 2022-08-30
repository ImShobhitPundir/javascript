
//1st method

let permutationsArray = [];
let permutation = (str, result)=>{
    if(str.length === 0){
        //if string have repeated character then this make duplicates combinations so we stop to push duplicate value in array by using indexOf...indexOf return -1 if value not found and return index of the value in array or string if there is a match...this return index of first matched value in array or string
        if(permutationsArray.indexOf(result) == "-1"){
            permutationsArray.push(result) 
        }
    }
    for(let i = 0; i<str.length; i++){
        let rest = str.substring(0,i)+str.substring(i+1)
        permutation(rest, result+str[i])
    }  
    return permutationsArray;
}

//if we send string with repeated char so function return some duplicate results so we can remove duplicate string using of ...new Set or stop to push in array using of indexOf used in above function
//let uniqueChars = [...new Set(permutation('aabc',''))]

console.log(permutation('abcd',''))

//2nd Method--------------------

   let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
        return "Please enter a string"
    } else if (string.length < 2 ){
        return string
    }

  let permutationsArray = [] 
  for (let i = 0; i < string.length; i++){
    let char = string[i]
    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        for (let permutation of findPermutations(remainingChars)){
            permutationsArray.push(char + permutation) 
        }
    }
  return permutationsArray
}

//console.log(findPermutations('abc'))
