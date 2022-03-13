function transpose(arr) {
    let trans = []
    for(let i = 0; i<arr[0].length;i++){

    let row = []

     for(let j =0;j<arr.length;j++){
         let item = arr[j]
         row.push(item[i])

    }
    trans.push(row)
}
return trans
    
}

module.exports = transpose





console.log(arr)


