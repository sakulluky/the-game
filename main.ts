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
    x = 2
    for (let i = 0; i <= 5; i++) 
    {
        x = 2
        for (let j = 0; j <= 5; j++) 
        {
            if (isWall[playerPos[0] + x][playerPos[1] + y]) 
            {
                led.plot(x + 2, y + 2)
            } else 
            {
                led.unplot(x + 2, y + 2)
            }
            x -= 1
        }
        y -= 1
    }
    
    led.plot(2, 2)
}
input.onButtonPressed(Button.B, function () 
{
    if (!isWall[playerPos[0] + rotation[0]][playerPos[1] + rotation[1]])
    {
        playerPos[0] = playerPos[0] + rotation[0]
        playerPos[1] = playerPos[1] + rotation[1]
    }
})
let playerPos: number[] = []
let rotation: number[] = []
let isWall: boolean[][] = []
let y = 0
let x = 0
isWall = [
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, true,true,true,true,true,true,true,true,true,true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, false, false, false, true, false],
    [false, true,true,true,true,true,true,true,true,true,true, false],
    [false, false, false, false, false, false, false, false, false, false, false, false]
]
rotation = [1, 0]
playerPos = [5, 5]
led.plot(2, 2)
loops.everyInterval(500, function () {
    Render()
})
