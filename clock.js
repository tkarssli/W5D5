class Clock {
    constructor(){
        this.date_obj = new Date()
        this.printTime()
        setInterval(() => {
            this._tick.call(this)
        }, 1000)
    }

    printTime() {
        console.log(`${this.date_obj.getHours()}:${this.date_obj.getMinutes()}:${this.date_obj.getSeconds()}`)

    }

    _tick() {
        // console.log(context)
        this.date_obj.setSeconds(this.date_obj.getSeconds() + 1)
        this.printTime()
    }

}


let clock = new Clock();