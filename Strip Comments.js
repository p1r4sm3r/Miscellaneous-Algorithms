function solution(input, markers) {
    var output = []; strip = input.split(""), newLine = [], indexes = [];
    for(let i = 0; i<input.length; i++){
        if (input[i] === '\n')
            indexes.push(i)};
    newLine.push(input.slice(0,indexes[0]))
    for (i=0; i<indexes.length; i++){
        strip = input.slice([indexes[i]], indexes[i+1])
        newLine.push(strip)
    }
    for (i=0;i<newLine.length; i++){
        for (x=0; x<markers.length; x++){
            //console.log(newLine[i].join(""))
            if (newLine[i].includes(markers[x])){
                console.log(newLine[i])
                newLine[i] = newLine[i].slice(0,newLine[i].indexOf(markers[x])-1)
            }
        }
    }
    console.log(newLine)
};

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["%", "!"])

// Optimal
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
