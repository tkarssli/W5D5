const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function absurdBubbleSort(arr, sortCompletionCallback) {

    function outerBubbleSortLoop(madeAnySwaps) {
        if(madeAnySwaps === true){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else if (madeAnySwaps === false){
            sortCompletionCallback(arr)
        }
    }


    outerBubbleSortLoop(true)

}

function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} greater than ${el2}? : `, res => {
        if(res ===  `yes`){
            callback(true)
        } else {
            callback(false)
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length -1 ){
        askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan){
            if (isGreaterThan) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                madeAnySwaps = true
            }

            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })
    } else {
        outerBubbleSortLoop(madeAnySwaps)
    }
}


// askIfGreaterThan(2,1, bool => console.log(bool));

// innerBubbleSortLoop([1,2,3], 0, false, madeAnySwaps => console.log(madeAnySwaps))

absurdBubbleSort([3,2,1], arr => console.log(arr))

