input.onButtonPressed(Button.A, function () {
    basic.showString("Dir:")
    basic.showNumber(input.compassHeading())
    compassDirection = input.compassHeading()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    directionGuess = input.compassHeading()
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.showString("Gs:")
    basic.showNumber(directionGuess)
    basic.pause(1000)
    basic.showString("S:")
    basic.showNumber(compassDirection - directionGuess)
})
let directionGuess = 0
let compassDirection = 0
basic.showNumber(input.compassHeading())
basic.clearScreen()
basic.forever(function () {
	
})
