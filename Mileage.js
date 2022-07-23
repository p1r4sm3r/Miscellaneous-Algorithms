function isInteresting(number, awesomePhrases) {
    var off = [];
    if (number<98){return 0}
    if (number==99||number==98){return 1}
    for (let x = 2; x>-3; x--){
        var test = number + x, numArr = String(test).split("").map((num)=>{return Number(num)}), largen=0, zero=0, seq=0,cseq=0,palin=[];
        for (i=0;i<numArr.length;i++){
            if (numArr[0]==numArr[i]){largen+=1}
            if (numArr[i]==0){zero+=1}
            if (numArr[i]+1==numArr[i+1]){seq+=1}
            if (numArr[i]-1==numArr[i+1]){cseq+=1}}
        if (numArr.length-1==zero){off.push(x)}
        if (largen == numArr.length){off.push(x)}
        if (seq == numArr.length-1||seq == numArr.length-2 && numArr[numArr.length-1]==0 && numArr[numArr.length-2]==9){off.push(x)}
        if (cseq == numArr.length-1){off.push(x)}
        for (i=0;i<Math.floor(numArr.length/2);i++){
            if (numArr[i]==numArr[(numArr.length-1)-i]){
                palin.push(numArr[i])}}
        if (palin.length==Math.floor(numArr.length/2)){off.push(x)}
        if (awesomePhrases.includes(test)){off.push(x)}}
    if (off.includes(0)){return 2}
    if (off.includes(-1)||off.includes(1)||off.includes(-2)||off.includes(2)){return 1}
    return 0}  

// vs Optimal
const chars = n => n.toString().split('')
const match = s => n => new RegExp(n).test(s)
const regex = r => n => r.test(n)

const tests = [
  match('1234567890'),                  // incremental
  match('9876543210'),                  // decremental
  regex(/^\d0+$/),                      // all zeroes
  regex(/^(\d)\1+$/),                   // repeated
  n => n == chars(n).reverse().join('') // palindrome
]

const test = (n, xs) => n > 99 && 
  (xs.indexOf(n) > -1 || tests.map(t => t(n)).some(x => !!x))
  
const isInteresting = (n, xs) =>
  test(n, xs) ? 2 : +(test(n + 1, xs) || test(n + 2, xs))
