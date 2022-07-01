function alphabetPosition(texto) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let text = texto.toLowerCase();
  let final = ''
  for (let x = 0; x<=text.length; x++){
      for (let i = 0; i<=alphabet.length; i++){
      if (text[x] == alphabet[i]){
        final = final + ' ' + (i+1)
      }
    }
  }
  return final.replace(/^\s+/g, '').slice(0,-3)
}

var uniqueInOrder=function(iterable){
  let unique = []
  
  for (let i = 0; i<=iterable.length; i++){
    if (unique.includes(iterable[i])){
      if (iterable[i] == iterable[i-1]){
        continue
      }
      else{
        unique.push(iterable[i])
      }
    }
    else{
      unique.push(iterable[i])
    }
  }
  let final = unique.pop();
  console.log(unique)
}
