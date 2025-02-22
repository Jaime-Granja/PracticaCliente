import { DEFAULT_TIME, TIME_FORMAT } from "./constants.js"
/**
*  Decremental timer alert
*/
class Timer {
/**
* Constructor
* @param {Number} total  total time in seconds
*
* 
*/
    constructor(total) {
        this.total = total || DEFAULT_TIME
        this.remainingTime = this.total
        console.log('New Timer: ', this.total)
    }
/**
 * 
 * @param {Function} callback 
 */
    start(callback) {
        this.interval = setInterval(()=>{
            this.remainingTime--
            if (this.remainingTime == 0) {
                this.stop()
            }
            callback(this.remainingTime)
        },1000)
    }

stop() {
    clearInterval(this.interval)  
}
    /**
* Get formatted minutes
* @returns {String} minutes in two digits
*
*/
    getMinutes() {
        let minutes = (Math.floor(this.remainingTime/60))
        return minutes.toLocaleString(...TIME_FORMAT)
    }
/**
* Get formatted seconds
* @returns {String} seconds in two digits
*
*/
    getSeconds() {
        let minutes = ((this.remainingTime % 60))
        return minutes.toLocaleString(...TIME_FORMAT)
    }
}
export default Timer