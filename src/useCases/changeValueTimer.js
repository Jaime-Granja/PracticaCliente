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
    let remainingSeconds = timer.remainingTime % 60
    timer.remainingTime -= (remainingSeconds || 60)
     
}