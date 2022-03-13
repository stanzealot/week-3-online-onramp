function binaryReversal(value) {
    let binary = value.toString(2)
    let eightBit = `0000000${binary}`.slice(-8)
    let reverse ="";
    for(let i = eightBit.length-1;i>=0;i--){
       reverse +=eightBit[i];
    }
   decimal = parseInt(reverse,2);
   
   return decimal;

}

module.exports = binaryReversal

console.log(binaryReversal(47))



