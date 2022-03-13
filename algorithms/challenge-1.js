function romanToDecimal(roman) {
    let s = roman.toUpperCase();
    var num =0
    var i =0 
    romanNumeral = [{I:1,V:5,X:10,L:50,C:100,D:500,D:1000,IV:4,IX:9,XL:40,XC:90,CD:400,CM:900}]
    let key= [];
    while(i<s.length){
    
        romanNumeral.forEach(element => {
            key = Object.keys(element);
       });
       
        if((i+1 < s.length) && (key.includes(s.substring(i,i+2)))){
            console.log("second time increment")
            num = num + romanNumeral[0][s.substring(i,i+2)]
            
            i+=2;
        }
        else{
            
            num = num + romanNumeral[0][s.substring(i,i+1)]
            i+=1
        }
    }
    return num;
}

module.exports = romanToDecimal






//if(roman.includes(s.substring(0,)))
// newArr =[]
// valArr =[]
// const x = [{i:1,v:5,x:10,l:50,c:100}]
// let roman = "xvi"
 
// let val;
// let key;

// for(let i=0;i<roman.length;i++){
//     key = roman.substring(i,i+1);
//     val = x[0][key];
//     //;
//     newArr.push(val)

// }
// sum =0;
// sub = 0;
// for(let i=0; i<newArr.length;i++){
//     if(newArr[i] > newArr[i+1]){

//         sum = sum + newArr[i];
        
        
//     }
//     else if(newArr[i]<newArr[i+1]){
//         sub = newArr[i+1]-newArr[i]
        

//         if(sub > newArr[i+2]){
//             sum = sum+sub
            
//         }
//         else if(sub < newArr[i+2]){
//             sub = newArr[i+2] -sub
//             sum = sum+sub
//         }
//     }
// }
// console.log(sum);




