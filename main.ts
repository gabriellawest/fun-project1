input.onButtonPressed(Button.A, function () {
    little_man.change(LedSpriteProperty.X, 1)
    soundExpression.hello.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    little_man.change(LedSpriteProperty.Y, 1)
    soundExpression.hello.playUntilDone()
})
let little_man: game.LedSprite = null
music.playMelody("G B A G C5 B A B ", 310)
music.playMelody("G B A G C5 B A B ", 310)
basic.showString("START")
game.startCountdown(60000)
little_man = game.createSprite(0, 0)
let coins = game.createSprite(4, 4)
let chomper = game.createSprite(0, 2)
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        chomper.move(randint(0, 1))
        basic.pause(200)
        chomper.turn(Direction.Right, randint(45, 90))
        basic.pause(200)
        chomper.move(randint(0, 1))
        basic.pause(200)
    }
    if (chomper.isTouching(little_man)) {
        little_man.delete()
        music.playMelody("- - F E D C - - ", 292)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            . # # # .
            . # # # .
            `)
        basic.showString("YOU LOSE")
        game.gameOver()
    }
})
basic.forever(function () {
    if (little_man.isTouching(coins)) {
        music.playMelody("F C5 B G B A C5 B ", 307)
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showString("YOU WIN!")
        game.addScore(1)
        game.gameOver()
    }
})
