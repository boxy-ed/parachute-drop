// This loop resets the microbit when button A is pressed.
input.onButtonPressed(Button.A, function () {
    basic.showString("Reset")
    start_time = 0
    end_time = 0
})
// This loop detects free fall  from the accelerometer. When the micro:bit detects freefall, it sets a variable start time.
input.onGesture(Gesture.FreeFall, function () {
    start_time = input.runningTime()
    // While the micro:bit is  falling a down arrow is displayed. After freefall the end time is set.
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    end_time = input.runningTime()
    basic.showString("ouch!")
    // The block calculates fall time
    basic.showNumber(end_time - start_time)
})
// This tells the user which project they're using.
let end_time = 0
let start_time = 0
basic.showString("Parachute tester")
// After displaying the welcome and reset messages the micro:bit displays the time taken for the last drop in ms.
basic.forever(function () {
    basic.showNumber(end_time - start_time)
})
