var rotate = function(matrix) {
    /*
    //using of another 2D matrix and do the rotation
    
    let temp = [];
    for(let i = 0; i<matrix.length; i++){
        temp[i] = [];
        for(let j=0, k=matrix[i].length-1; j<matrix[i].length, k>=0; j++, k--){
            temp[i][j] = matrix[k][i]
        }

    }
    return temp;
    */
    for(let i = 0; i<matrix.length; i++){
        let temp;
        for(let j=i; j<matrix[i].length; j++){
            temp = matrix[i][j];
            matrix[i][j]=matrix[j][i]
            matrix[j][i] = temp;
        }
    }
    for(let i=0; i<matrix.length; i++){
        let temp;
        let x = 0;
        let y = matrix.length-1;
        while(x < y){
            temp = matrix[i][x];
            matrix[i][x]=matrix[i][y]
            matrix[i][y] = temp;
            x++;
            y--;
        }
       
    }
    
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))