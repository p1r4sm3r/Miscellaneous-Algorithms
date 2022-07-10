// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// if count % 2 != 0 return i

function findOdd(A) {
  let count = 0
  for (let i = 0; i<A.length; i++){
    for (let x = 0; x<A.length; x++){
      if (A[i] == A[x]){
        count += 1
      }
    }
    if ((count % 2)!=0){
      return A[i]
    }
  }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

function findOdd(A) {
  let count = 0
  for (let i = 0; i<A.length; i++){for (let x = 0; x<A.length; x++){if (A[i] == A[x]){ count += 1}}if ((count % 2)!=0){return A[i]}}}
