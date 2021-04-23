input.onButtonPressed(Button.A, function () {
    little_man.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    little_man.change(LedSpriteProperty.Y, 1)
})
let little_man: game.LedSprite = null
basic.showString("START")
game.startCountdown(60000)
little_man = game.createSprite(0, 0)
let coins = game.createSprite(4, 4)
basic.forever(function () {
    if (little_man.isTouching(coins)) {
        game.addScore(1)
        basic.showIcon(IconNames.Heart)
        music.playMelody("F G F E G A B C5 ", 307)
        game.gameOver()
    }
})
