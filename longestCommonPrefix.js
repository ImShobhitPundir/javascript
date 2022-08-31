var longestCommonPrefix = function (strs) {
    if (strs.length <= 1) {
        return strs[0];
    } else {
        let shortestString = strs.reduce(function (a, b) {
            return a.length <= b.length ? a : b;
        })
        if(shortestString.length != 0){
            for (let i = 1; i <= shortestString.length; i++) {
                let status;
                let search = shortestString.substring(0, i)
                let prevSearch = shortestString.substring(0, i - 1)
                for (let j = 0; j < strs.length; j++) {
                    if (strs[j].indexOf(search) != 0) {
                        return prevSearch;
                    }
                }
                
                if(shortestString.length == i){
                    return search;
                }
            }
            
        }else{
            return "";
        }
    }

};  

console.log(longestCommonPrefix(["flower","flow","flight"]))