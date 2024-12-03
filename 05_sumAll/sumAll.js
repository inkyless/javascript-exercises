const sumAll = function(num1,num2) {
    let max_num;
    let counter_num;
    let total = 0;
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 >0)
    {if (num1<num2){
        max_num = num2
        counter_num = num1
    } else{
        max_num = num1
        counter_num = num2
    }
} else{
    return "ERROR"
}
    for (let i=0;i<max_num;i++){
        total+=counter_num;
        counter_num++;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
