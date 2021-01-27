function doReport () {
    for (let index = 0; index <= Stars.length - 1; index++) {
        basic.showString("" + (Types[index]))
        if ("M" == Types[index]) {
            Mfound += 1
        }
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
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("M:")
    basic.showNumber(Mfound)
    basic.pause(100)
    showStars()
})
input.onButtonPressed(Button.AB, function () {
    doWarp()
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
function doWarp () {
    images.createBigImage(`
        . . . . . . . . . .
        # # # # . # # # # .
        . . # . . . # . . .
        . . . # # # # . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . # . . # . . . . .
        . . . . . . . . . .
        . . . # . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
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
let Mfound = 0
let TypeList: string[] = []
doWarp()
TypeList = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
buildStars()
showStars()
Mfound = 0
