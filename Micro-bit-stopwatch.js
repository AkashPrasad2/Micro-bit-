let start_time = 0
input.onButtonPressed(Button.A, function () {
    // is the watch running?
    if (start_time == 0) {
        // store current time
        start_time = input.runningTime()
        basic.showIcon(IconNames.Butterfly)
    } else {
        // compute duration and display it
        basic.showNumber(Math.idiv(input.runningTime() - start_time, 1000))
        // reset watch state
        start_time = 0
    }
})
start_time = 0
