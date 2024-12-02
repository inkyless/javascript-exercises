const reverseString = function(string) {
    let result = [];
    let len_string = string.length
    let len = len_string
    for (let i=0;i<len_string;i++){
        len--
        result.push(string[len])
    }
    return result.join('')
    
};

// Do not edit below this line
module.exports = reverseString;
