function getMiddle(s) {
    let len = s.length;
    if (len % 2 == 0) {
        console.log(s[(Math.round(len/2))-1] + s[Math.round(len/2)])
    }
    else {
    console.log(s[Math.floor(len/2)]);
    }
}
getMiddle('')

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i< str.length; i++) {
        if (vowels.includes(str[i])){
            count += 1
        }
        else {
            continue
        }
    }
    console.log(count)
  }

getCount('')
