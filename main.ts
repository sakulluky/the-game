input.onButtonPressed(Button.A, function () {
    if (rotation[0] == 1 && rotation[1] == 0) {
        rotation[0] = 0
        rotation[1] = -1
    } else if (rotation[0] == 0 && rotation[1] == -1) {
        rotation[0] = -1
        rotation[1] = 0
    } else if (rotation[0] == -1 && rotation[1] == 0) {
        rotation[0] = 0
        rotation[1] = 1
    } else if (rotation[0] == 0 && rotation[1] == 1) {
        rotation[0] = 1
        rotation[1] = 0
    }
})
function Render () {
    y = 2
    for (let i = 0; i <= 5; i++) {
        x = 2
        for (let j = 0; j <= 5; j++) {
            if (isWall[playerPos[0] + x][playerPos[1] + y] == true) 
            {
                led.plot(x + 2, y - 2)
            } else 
            {
                led.unplot(x + 2, y - 2)
            }
            x - 1
        }
        y - 1
    }

}
input.onButtonPressed(Button.B, function () {
    playerPos[0] = playerPos[0] + rotation[0]
    playerPos[1] = playerPos[1] + rotation[1]
})
let playerPos: number[] = []
let rotation: number[] = []
let isWall: boolean[][] = []
let x = 0
let y = 0
isWall = [
[true,true,true,true,true,true,true,true,true,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,true,true,true,true,true,true,true,true,true]
]
rotation = [1, 0]
playerPos = [5, 5]
led.plot(2, 2)
loops.everyInterval(500, function () {
    Render()
})
