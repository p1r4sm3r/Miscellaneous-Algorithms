function anagram(word, words) {
    match = [];
    for (let i = 0; i < words.length; i ++ ){
        if (word.split('').sort().join('') == words[i].split('').sort().join(''))
            match.push(words[i]);
    }
    console.log(match);
}

// initial thought
function anagrams(word, words) {
    matches = []
    var match = word.split("");
    for (let n = 0; n<words.length; n++) { // for each potential anagram
        if (words[n].length == match.length) { // preliminary screening
            split = words[n].split("") // splits to match

            for (let i = 0; i<split.length; i++){ // for each letter in OG word
                for (let x = 0; x<split.length; x++){ // for each letter in potential word
                    console.log(split[x], match[i],split.length)
                    if (split[x]==match[i]){ // if the letter in potential word matches first letter in OG word
                        split.splice(x,1);
                        match.splice(i,1);
                    }
                }
            }
            if (split.length==0){
                matches.push(words[i])
                match = word.split("")
                console.log(match, 'a')
            }
        }
    }
    console.log(matches)
}
