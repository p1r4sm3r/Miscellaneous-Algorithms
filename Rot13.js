function rot13(message){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""), message = message.split(""), final = [], shift = 0;
    for (let i = 0; i<message.length; i++){
        if (alphabet.includes(message[i].toLowerCase())==true){
            for (let x = 0; x<alphabet.length; x++){
                if (message[i].toLowerCase()==alphabet[x]){
                    shift = x
                    if ((shift+13)>25){
                        shift = (shift+13)-26
                        if (alphabet.includes(message[i])==false){
                            final.push(alphabet[shift].toUpperCase())
                        }
                        else{final.push(alphabet[shift])}
                    }
                    else {
                        shift = x+13
                        if (alphabet.includes(message[i])==false){
                            final.push(alphabet[shift].toUpperCase())
                        }
                        else{final.push(alphabet[shift])}
                    }
                }
            }
        }
        else{final.push(message[i])}
    }
    return final.join("")
  }
// Line optimized version
function rot13(message){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""), message = message.split(""), final = [], shift = 0;
    for (let i = 0; i<message.length; i++){if (alphabet.includes(message[i].toLowerCase())==true){for (let x = 0; x<alphabet.length; x++){if (message[i].toLowerCase()==alphabet[x]){shift = x
if ((shift+13)>25){shift = (shift+13)-26
if (alphabet.includes(message[i])==false){final.push(alphabet[shift].toUpperCase())}else{final.push(alphabet[shift])}}else {shift = x+13
if (alphabet.includes(message[i])==false){final.push(alphabet[shift].toUpperCase())}else{final.push(alphabet[shift])}}}}}else{final.push(message[i])}}return final.join("")}

console.log(rot13('Test'))
