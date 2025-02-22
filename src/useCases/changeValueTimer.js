import { DEFAULT_TIME } from "../constants.js";
import Timer from "../timerEntity.js";

/**
 * 
 * @param {Timer} timer 
 */

export const increaseTimer = (timer) => {
        timer.remainingTime += 60 - (timer.remainingTime % 60)
    
    
     
}
/**
 * 
 * @param {Timer} timer 
 */

export const decreaseTimer = (timer) => {
    if (timer.remainingTime > 0) {
        let remainingSeconds = timer.remainingTime % 60
        timer.remainingTime -= (remainingSeconds || 60)
    }
}


export const resetTimer = (timer) => {
     timer.remainingTime = DEFAULT_TIME
     
}