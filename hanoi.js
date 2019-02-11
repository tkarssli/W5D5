const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Game {
    constructor(){
        this.towers = [[3,2,1],[],[]]
    }

    promptMove (callback) {
        this.print()
        reader.question(`Where would you like to move from? : `, startTowerIdx => {
            reader.question(`Where would you like to move to? : `, endTowerIdx => {
                callback(startTowerIdx,endTowerIdx)
            })
        })
    }

    isValidMove(startTowerIdx, endTowerIdx) {
        if (this.towers[endTowerIdx].length === 0 && this.towers[startTowerIdx].length !== 0){
            return true
        } else if (this.towers[endTowerIdx].length === 0 && this.towers[startTowerIdx] .length === 0) {
            return false
        }
        return this.towers[startTowerIdx].slice(-1) < this.towers[endTowerIdx].slice(-1)
    }

    move(startTowerIdx, endTowerIdx){
        if(this.isValidMove(startTowerIdx, endTowerIdx)){
            this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop()) 
            return true
        }else {
            return false
        }
    }

    print(){
        console.log(`${JSON.stringify(this.towers[0])} | ${JSON.stringify(this.towers[1])} | ${JSON.stringify(this.towers[2])}`)
    }

    isWon(){
        if(this.towers[1].length === 3 || this.towers[2].length === 3){
            return true
        }

        return false
    }

    run(completionCallback){
        this.promptMove((startTowerIdx, endTowerIdx)=> {
            if(!this.move(startTowerIdx,endTowerIdx)){
                console.log(`Bad Move!`)
                this.run(completionCallback)
            } else if (this.isWon() === false){
                this.run(completionCallback)
            } else {
                completionCallback()
            }
        })

        
    }
}



hanoi = new Game()
// hanoi.promptMove((start,end) => console.log(`${start} | ${end}`))
// console.log(hanoi.isValidMove(1,2))
// console.log(hanoi.isValidMove(0,1))
// console.log(hanoi.move(0,1))
// console.log(hanoi.towers)
// console.log(hanoi.move(0,1))
// hanoi.print()
// console.log(hanoi.isWon())
hanoi.run(() => console.log(`You Win!`))
