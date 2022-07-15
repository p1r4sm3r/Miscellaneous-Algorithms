// Formatted

function sumArray(array) {
  if (array == null||array.length<3){
    return 0
  };
  var sum = array.reduce(function (a, b) {return a + b;}, 0),
  high = array.reduce((a, b) => {return Math.max(a, b)}),
  low = array.reduce((a,b)=>{return Math.min(a,b)});
  
  return sum-(high+low)};

// Single line

function sumArray(array) {if (array == null||array.length<3){return 0}var sum = array.reduce(function (a, b) {return a + b;}, 0), high = array.reduce((a, b) => {return Math.max(a, b)}); low = array.reduce((a,b)=>{return Math.min(a,b)});return sum-(high+low)}

// Optimal

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
