var maxSequence = function(nums){
  let maxCurrent = nums[0], maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {maxGlobal = maxCurrent;}}
  if (maxGlobal < 0||maxGlobal == null){return 0}
  return maxGlobal
}

//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Theory: trim the start and end of the array to make more efficient,
// if the sum of arr[0] to current index is smaller than zero, skip it entirely, and vice versa for end of array

function test(arr){
    let sum = 0;
    for (let i = 0; i<Math.floor(arr.length/2); i++){
        sum += arr[i]
        if ((sum + arr[i])>0){
            arr = arr.slice(i,arr.length)
            for (let x = 0; x<Math.floor(arr.length/2);x++){
                if(sum+arr[arr.length-x]>0){
                    arr = arr.slice(0,arr[x-1])
                    console.log(arr)
                }
            }
            console.log(arr)
            console.log((arr.reduce(function (a, b) {return a + b;}, 0))) 
            
        }
        else{return 0}
    }
    return (arr.reduce(function (a, b) {return a + b;}, 0))
}
