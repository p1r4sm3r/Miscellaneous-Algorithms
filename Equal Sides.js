function findEvenIndex(arr){
  for (let i = 0; i<=arr.length; i++){
    if (((arr.slice(0,(i-1)).reduce((a, b) => a+b, 0)) == arr.slice(i, arr.length).reduce((a,b)=>a+b, 0))){
      return (i-=1) 
    }
  }
  console.log(arr)
  if (arr.includes('0')){
    console.log('a')
  }
  return -1
}
  //won't work for length of 2 with 0s, fixed in below.
console.log(findEvenIndex([8,0]))

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
