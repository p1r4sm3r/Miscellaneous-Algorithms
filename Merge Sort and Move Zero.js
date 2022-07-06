function mergeArrays(arr1, arr2) {
  repeats = []
  var comb = (arr1.concat(arr2)).flat()
  for (let i = 0; i<=comb.length-1; i++) {
    if (repeats.includes(comb[i])==false){
        repeats.push(comb[i])
    }
}
  return repeats.sort((a, b) => (a - b));
}

function moveZeros(arr) {
    let zeroes = [];
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            zeroes.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    return arr.concat(zeroes)
}
