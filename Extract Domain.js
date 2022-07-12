function domainName(url){
    domain = []
    if (url[3] == '.'){
        for (let i = 4; i<url.length; i++){
            if (url[i]!='.'){
                domain.push(url[i])
            }
            else{break}
        }
    }
    if (url[6]=='/'){
        for (let i = 7; i<url.length;i++){
            if (url[i]!= '.'){
                domain.push(url[i])
            }
            else{break}
        }
    }
    return domain.join("")
  }

function domainName(url){
    test = url.split("")
    domain = []
    for (let i = 0; i<test.length; i++){
        if (test.slice(0,12).join("")=='https://www.'){
            for (let x = i+12;x<test.length;x++){
                if (test[x]!="."){
                    domain.push(test[x])
                }
                else {
                    break
                }
            }
            return domain.join("")
        }
        if (test[i]=='.'){
            for (let x = i+1;x<test.length;x++){
                if (test[x]!="."){
                    domain.push(test[x])
                }
                else {
                    break
                }
            }
            return domain.join("")
        }
        if (test[i]=='/'){
            for (let x = i+2;x<test.length;x++){
                if (test[x]!="."){
                    domain.push(test[x])
                }
                else {
                    break
                }
            }
            return domain.join("")
        }
    }
}

function domainName (url) {
    return url.replace("https://www.", '').replace('https://','').replace('www.','').replace('http://','').split(".")[0];
}

console.log(domainName("https://www.1f1d4l175mhf54e4wzkvx.de/img/"))
