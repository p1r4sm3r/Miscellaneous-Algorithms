function nextBigger(n){
    var ints = (""+n).split('').map(Number), change = [];
    for (let i = ints.length-1; i>-1; i--){
        //if (ints[i])
        //console.log(ints.splice(0,i).join(""));
        change.push(ints[i]);
        if (ints[i]>ints[i-1]){
            change.push(ints[i-1]);
            change.sort()
            for (let x = 0; x<change.length; x++){
                if (change[x]>ints[i-1]){
                    ints[i-1] = change[x];
                    change.splice(x,1)
                    break
                }
            }
            return Number(ints.splice(0,i).join("")+change.join(""))
        }
        //console.log(Number(ints.splice(0,i)+change.join("")), Number(ints.join("")))
        // if (Number(ints.join("")+''+change.join(""))>n){
        //     return Number(ints.join("") + change.join(""))
        // }
    }
    return -1
}
console.log(nextBigger(59884848495853))   // 6354789257903
// nextBigger(513)  // returns 531
// nextBigger(2017) // returns 2071
//[ 3, 5, 5, 8, 9 ]
//598848484 95853 598848484 83559

function nextBigger(n){
    var ints = (""+n).split('').map(Number), change = [];
    for (let i = ints.length-1; i>-1; i--){change.push(ints[i]);
        if (ints[i]>ints[i-1]){change.push(ints[i-1]);change.sort();
            for (let x = 0; x<change.length; x++){
                if (change[x]>ints[i-1]){
                    ints[i-1] = change[x];
                    change.splice(x,1)
                    break}}
            return Number(ints.splice(0,i).join("")+change.join(""))}}
    return -1
}
