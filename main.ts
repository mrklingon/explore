function doReport () {
    for (let index = 0; index <= Stars.length - 1; index++) {
        basic.showString("" + (Types[index]))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        findCoord(Stars[index])
        led.plotBrightness(sx, sy, Magnitude[index])
        basic.pause(500)
    }
    showStars()
}
input.onButtonPressed(Button.AB, function () {
    buildStars()
    showStars()
})
input.onButtonPressed(Button.B, function () {
    doReport()
})
function buildStars () {
    Types = []
    Stars = []
    Magnitude = []
    for (let index = 0; index < randint(5, 13); index++) {
        Stars.push(randint(0, 24))
        Magnitude.push(randint(50, 242))
        Types.push(TypeList[randint(0, TypeList.length - 1)])
    }
}
function findCoord (num: number) {
    sx = Math.trunc(num / 5)
    sy = num % 5
}
function showStars () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index <= Stars.length - 1; index++) {
        findCoord(Stars[index])
        led.plotBrightness(sx, sy, Magnitude[index])
    }
}
let Magnitude: number[] = []
let sy = 0
let sx = 0
let Types: string[] = []
let Stars: number[] = []
let TypeList: string[] = []
TypeList = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
buildStars()
showStars()
