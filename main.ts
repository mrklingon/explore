function buildStars () {
    Types = []
    Stars = []
    Magnitude = []
    for (let index = 0; index < randint(5, 13); index++) {
        Stars.push(randint(0, 24))
        Magnitude.push(randint(50, 242))
        Types.push(TypeList[randint(0, TypeList.length)])
    }
}
function findCoord (num: number) {
    sx = Math.trunc(num / 5)
    sy = num % 5
}
function showStars () {
    for (let index = 0; index <= Stars.length - 1; index++) {
        findCoord(Stars[index])
        led.plotBrightness(sx, sy, Magnitude[index])
    }
}
let sy = 0
let sx = 0
let Magnitude: number[] = []
let Stars: number[] = []
let Types: string[] = []
let TypeList: string[] = []
TypeList = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
buildStars()
showStars()
basic.forever(function () {
	
})
