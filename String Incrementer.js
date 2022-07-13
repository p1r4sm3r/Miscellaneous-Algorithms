function incrementString (strng) {
    let array = strng.split(""), num = [], zeroes = [], numbers = 0
    for (let i = 1; i<array.length+1; i++){
        if (Number.isInteger(parseInt(array[array.length-i])) == true){
            num.push(array[array.length-i])
            numbers += 1
            if (array[array.length-i] == 0){
                zeroes.push(0)
            }
        }
    }
    for (let i = 0; i<numbers;i++){
        array.pop()
    }
    let sum = (parseInt(num.reduce((a, b) => b+a,0)));
    console.log(sum)
    sum = Math.floor(sum/10)
    console.log(sum)
    template = array.join("")+num.join("")
    template = template.split("")
    for (let x = 0; x<numbers;x++){
        template.pop()
        //zeroes.pop()
    }
    if (isNaN(parseInt(zeroes.join("")))==true||isNaN(parseInt(zeroes.join("")))==0){
        zero = ''
        var finalsum = sum+1
    }
    else {
        var finalsum = parseInt(zeroes.join)+sum+1
    }
    zeroes.pop()
    //console.log(template,numbers,zeroes,sum,zero)
    console.log(zeroes,finalsum)
    return template.join("")+zeroes.join("")+finalsum
}
console.log(incrementString('foobar001'))

function incrementString(str) {
    return str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
}
