<script setup>
// Adapted from: https://codesandbox.io/p/sandbox/circle-timer-3wz87?file=%2Fsrc%2Fstyles.css%3A23%2C28

import { ref, onMounted } from 'vue'
const props = defineProps({
    timeLimit: String
})
const FULL_DASH_ARRAY = 283
const WARNING_THRESHOLD = 10
const ALERT_THRESHOLD = 5

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
}

let timePassed = 0
let timeLeft = props.timeLimit
let timerInterval = null
const remainingPathColor = ref(COLOR_CODES.info.color)

function onTimesUp() {
    clearInterval(timerInterval)
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1
        timeLeft = props.timeLimit - timePassed
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        )
        setCircleDasharray()
        setRemainingPathColor(timeLeft)

        if (timeLeft === 0) {
            onTimesUp()
        }
    }, 1000)
}

function formatTime(time) {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color)
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color)
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color)
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color)
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / props.timeLimit
    return rawTimeFraction - (1 / props.timeLimit) * (1 - rawTimeFraction)
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray)
}

onMounted(() => {
    // startTimer()
})
</script>

<template>
    <div class="base-timer justify-self-center" @click="startTimer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path id="base-timer-path-remaining" stroke-dasharray="283"
                    :class="`${remainingPathColor} base-timer__path-remaining`" d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0 "></path>
            </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">{{ formatTime(timeLeft) }}</span>
    </div>
</template>

<style scoped>
.base-timer {
    position: relative;
    width: 300px;
    height: 300px;
}

.base-timer__svg {
    transform: scaleX(-1);
}

.base-timer__circle {
    fill: none;
    stroke: none;
}

.base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
}

.base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;
}

.base-timer__path-remaining.green {
    color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
    color: orange;
}

.base-timer__path-remaining.red {
    color: red;
}

.base-timer__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
}
</style>