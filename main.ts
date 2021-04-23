input.onButtonPressed(Button.A, function () {
    little_man.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    little_man.change(LedSpriteProperty.Y, 1)
})
let coins: game.LedSprite = null
let little_man: game.LedSprite = null
basic.showString("START")
game.startCountdown(60)
basic.forever(function () {
    little_man = game.createSprite(0, 0)
    coins = game.createSprite(4, 4)
    if (little_man.isTouching(coins)) {
        game.addScore(1)
        game.gameOver()
    }
    if (game.isGameOver()) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("G B A G C5 B A B ", 120)
    }
})
