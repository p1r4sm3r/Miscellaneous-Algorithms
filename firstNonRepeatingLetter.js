function firstNonRepeatingLetter(s){
    test = [];
    for(let i = 0; i < s.length; i++){
        if (s.toLowerCase().indexOf(s.toLowerCase().charAt(i),s.toLowerCase().indexOf(s.toLowerCase().charAt(i))+1) == -1){
            test.push(s[i])
            break
        }
    }
    return test.join("")
 }

// optimal
function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }

// initial thought
function firstNonRepeatingLetter(s) {
    var orig = [], unorig = [];
    for (let i = 0; i<s.length; i++){
        if (orig.includes(s[i])!=true){
            orig.push(s[i])
        }
        else{
            unorig.push(s[i])
        }
    }
    console.log(orig, unorig)
    for (let i = unorig.length-1; i>=0;i--){
        for (let x = orig.length-1; x>=0;x--){
            console.log(unorig[x],orig[i])
            if (unorig[x]==orig[i]){
                orig.splice(i,1)
                unorig.splice(x,1)
            }
        }
    }
    console.log(orig[0])
}
