// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    if(/^[a-zA-Z0-9]+$/i.test(string)){
        return true
    }
    else {
        return false
    }
}
//console.log(alphanumeric(''))

alphanumeric = string => /^[a-zA-Z0-9]+$/i.test(string) ? true : false

console.log(alphanumeric('test'))

// REGEX 
// ^         Start of string
// [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
// +         one or more times (change to * to allow empty string)
// $         end of string    
// /i        case-insensitive
