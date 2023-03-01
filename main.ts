input.onButtonPressed(Button.A, function () {
    if (rotation[0] == 1 && rotation[1] == 0) {
        rotation[0] = 0
        rotation[1] = -1

        arrow = 6
    } else if (rotation[0] == 0 && rotation[1] == -1) {
        rotation[0] = -1
        rotation[1] = 0

        arrow = 0
    } else if (rotation[0] == -1 && rotation[1] == 0) {
        rotation[0] = 0
        rotation[1] = 1

        arrow = 2
    } else if (rotation[0] == 0 && rotation[1] == 1) {
        rotation[0] = 1
        rotation[1] = 0

        arrow = 4
    }
})
function Render () {
    y = 3
    x = 3
    for (let i = 0; i <= 5; i++) 
    {
        x = 3
        for (let j = 0; j <= 5; j++) 
        {
            if (word[playerPos[0] + y][playerPos[1] + x] == 1) 
            {
                led.plot(x + 2, y + 2)
            } else if (word[playerPos[0] + y][playerPos[1] + x] == 2)
            {
                led.plot(x + 2, y + 2)
                
                led.plotBrightness(x + 2, y + 2, 100)
            }else
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
    if (word[playerPos[0] + rotation[0]][playerPos[1] + rotation[1]] != 1)
    {
        playerPos[0] = playerPos[0] + rotation[0]
        playerPos[1] = playerPos[1] + rotation[1]
    }

})
let playerPos: number[] = []
let rotation: number[] = []
let word: number[][] = []
let y = 0
let x = 0
let canRender = true
let arrow = 4
word = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
rotation = [1, 0]
playerPos = [5, 5]
led.plot(2, 2)
loops.everyInterval(500, function () 
{
    Render()
})
input.onButtonPressed(Button.AB, function() 
{
    canRender = false
    basic.showArrow(arrow)

    basic.pause(600)
    canRender = true
    
})
