import { DEFAULT_TIME, TIME_FORMAT } from "./constants.js"

export default class Timer {
    /**
* Constructor
* @param {Number} total  total time in seconds
*/
    constructor(total) {
        this.total = total || DEFAULT_TIME
        this.remainingTime = this.total
        console.log("New Timer: ", this.total)
    }
}
