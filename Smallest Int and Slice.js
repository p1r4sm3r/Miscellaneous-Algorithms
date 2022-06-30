function SmallestIntegerFinder(numbers) {
    let low = numbers[0]
    console.log(numbers)
    for (let i=0; i<= numbers.length; i++){
      if (numbers[i]<low) {
        low = numbers[i]
      }
    }
    console.log(low)
  }

SmallestIntegerFinder([34, 15, 88, 2])

function removeChar(str){
  
    // Method 1
    last = str.slice(0, str.length - 1);
    final = str.slice(1, last.length)
    console.log(final)
  
    // Method 2
    return str.slice(1, -1)
};
   
removeChar('Hello')
