const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft > 0){
        reader.question(`Enter a Number: `, (res) => {
            res_num = parseInt(res)
            sum = sum + res_num
            console.log(sum)
            addNumbers(sum, numsLeft-1, completionCallback)
        })
    } else {
        completionCallback(sum)
    }
}