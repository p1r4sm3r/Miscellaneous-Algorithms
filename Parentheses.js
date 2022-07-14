function validParentheses(parens) {
    for (let i = 0; i<parens.length; i++){
        if (parens[i]=='('){
            for (let x = i; x<parens.length-(i+1);x++){
                if (parens[x]==")"){
                    console.log(parens[x], 'test1')
                    i += 1
                }
                else {
                    console.log(parens[x],'test2')
                    return false
                }
            }
        }
    }
    return false
}

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++){
    if (parens[i]=="(") n++;
    if (parens[i]==")") n--;
    if (n < 0) return false;
  }
  return n == 0;
}
