import './styles/main.scss';


import {TIME_FORMAT} from "./constants.js"
import Timer from "./timerEntity.js"
import { decreaseTimer, increaseTimer, resetTimer } from "./useCases/changeValueTimer.js"


//TO-DO: Get last timer from local storage
let lastTimer  = 12
let timer = new Timer(lastTimer)
console.log('minutes: ', timer.getMinutes())
console.log('seconds: ', timer.getSeconds())

// Refrescamos la UI
const minutesText = document.getElementById("minutes")
const secondsText = document.getElementById("seconds")

/**
 * 
 * @param {HTMLElement} minutes 
 * @param {HTMLElement} seconds 
 * @param {Timer} timer 
 */
const refreshUI = (minutes, seconds, timer) => {
    minutes.innerHTML = timer.getMinutes()
    seconds.innerHTML = timer.getSeconds()
}

refreshUI(minutesText, secondsText, timer)




// SUMAR TIEMPO
const addMinute = () => {
    increaseTimer(timer)
    refreshUI(minutesText, secondsText, timer)
} 
// RESTAR TIEMPO
const subMinute = () => {
    decreaseTimer(timer)
    refreshUI(minutesText, secondsText, timer)
}

//Resetear Tiempo
const resetMinutes = () => {
  resetTimer(timer)
  refreshUI(minutesText, secondsText, timer)
  timer.stop();
}

//Comenzar Temporizador
const startButton = document.getElementById("startButton")
const startTimer = () => timer.start(refresh)
startButton.addEventListener("click", startTimer)


const refresh = (isRunning) => {
    refreshUI(minutesText, secondsText, timer)
    console.log('time remaining: ', isRunning)
}
const stop = () => {
    timer.stop()
}

//setTimeout para decrementar el timer
const tic = () => {
    if (seconds == 0) {
        minutes--
        minutesText.innerHTML = minutes.toLocaleString(...TIME_FORMAT)
        seconds=5
    }
    seconds--
    secondsText.innerHTML = seconds.toLocaleString(...TIME_FORMAT)
    console.log(seconds)
    if (seconds >= 0 && minutes >= 0) {
    setTimeout(tic,1000)
}
if (minutes==0 && seconds==0) {
    alert("BOOM!")
}
}
const upButton = document.getElementById("upButton")
const downButton = document.getElementById("downButton")
//const resetButton = document.getElementById("resetButton")
const stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", stop)

downButton.addEventListener("click", subMinute)
upButton.addEventListener("click", addMinute)

resetButton.addEventListener("click", resetMinutes)