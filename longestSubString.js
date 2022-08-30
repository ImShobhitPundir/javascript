let str = "pwwkew";
let newStr;

function longestSubString(st){
    let x = 0;
    for(let i = 0; i<st.length; i++){
        let set = new Set();
        let y = 0;
        for(let j=i; j<st.length; j++){
            if(set.has(st[j])){
                break;
            }else{
                set.add(st[j])
                y++;
                //console.log(y)
            }
        }
        if(x<y){
            x = y;
            //n = set;
        }   
    } 
    return x
}

console.log(longestSubString(str))