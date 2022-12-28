let sprite = game.createSprite(2, 2)
loops.everyInterval(2000, function () {
    sprite.move(1)
    if (sprite.isDeleted()) {
        game.gameOver()
    } else {
        game.addScore(1)
    }
    if (input.buttonIsPressed(Button.A)) {
        game.gameOver()
    } else {
        game.addScore(5)
    }
})
basic.forever(function () {
    sprite.ifOnEdgeBounce()
})
