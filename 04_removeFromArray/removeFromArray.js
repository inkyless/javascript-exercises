const removeFromArray = function(array,...numbers) {
    let result = [];
    for (eles of array){
        if (numbers.includes(eles)){
            continue;
        } else{
            result.push(eles)
        }   
        }
    return result

};

// Do not edit below this line
module.exports = removeFromArray;
