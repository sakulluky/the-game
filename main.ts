let playerPos: number[] = []
let player2Pos: number[] = []
let playerRotation: number[] = []
let canRender = true
let canMove = true
let arrow = 4
let word: number[][] = []
let y = 0
let x = 0
let time = 0

let enemyPos: number[] = []

radio.setGroup(32)

playerRotation = [1, 0]
playerPos = [2, 2]
player2Pos = [2, 2]
led.plot(2, 2)
enemyPos = [9, 9]

word[enemyPos[0]] [enemyPos[1]] = 2

//word 
// 0 = nothing
// 1 = baseWall
// 2 = enemy
// 4 = player 2
word = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

Render()

//Rotate player
input.onButtonPressed(Button.A, function () {
    if (canMove == true) {
        if (playerRotation[0] == 1 && playerRotation[1] == 0) {
            playerRotation[0] = 0
            playerRotation[1] = -1

            arrow = 6
        } else if (playerRotation[0] == 0 && playerRotation[1] == -1) {
            playerRotation[0] = -1
            playerRotation[1] = 0

            arrow = 0
        } else if (playerRotation[0] == -1 && playerRotation[1] == 0) {
            playerRotation[0] = 0
            playerRotation[1] = 1

            arrow = 2
        } else if (playerRotation[0] == 0 && playerRotation[1] == 1) {
            playerRotation[0] = 1
            playerRotation[1] = 0

            arrow = 4
        }
    }
})
//Move player
input.onButtonPressed(Button.B, function () {
    if (canMove) {
        if (word[playerPos[0] + playerRotation[0]][playerPos[1] + playerRotation[1]] != 1) {
            if (word[playerPos[0] + playerRotation[0]][playerPos[1] + playerRotation[1]] != 3) {
                playerPos[0] = playerPos[0] + playerRotation[0]
                playerPos[1] = playerPos[1] + playerRotation[1]

                Render()

                radio.sendValue("playerX", playerPos[0])
                radio.sendValue("playerY", playerPos[1])
            }
        }
    }
})

// recives player 2 position
radio.onReceivedValue(function (name: string, value: number) {
    word[player2Pos[0]][player2Pos[1]] = 0

    if (name == "playerX") {
        player2Pos[0] = value
    }
    if (name == "playerY") {
        player2Pos[1] = value
    }

    word[player2Pos[0]][player2Pos[1]] = 4
    Render()

})

//Renders the word
function Render() {
    y = 3
    x = 3
    for (let i = 0; i <= 5; i++) {
        x = 3
        for (let j = 0; j <= 5; j++) {
            if (word[playerPos[0] + y][playerPos[1] + x] == 1 || word[playerPos[0] + y][playerPos[1] + x] == 3) {
                led.plot(x + 2, y + 2)
            } else if (word[playerPos[0] + y][playerPos[1] + x] == 2) {
                led.plot(x + 2, y + 2)

                led.plotBrightness(x + 2, y + 2, 50)

            } else if (word[playerPos[0] + y][playerPos[1] + x] == 4) {
                led.plot(x + 2, y + 2)
            }
            else {
                led.unplot(x + 2, y + 2)
            }
            x -= 1
        }
        y -= 1
    }

    led.plot(2, 2)
}

function CalculateDistanc()
{

    let delka1 = mnozit((enemyPos[0] - playerPos[0]))+ mnozit((enemyPos[1] - playerPos[1]))
    delka1 = Math.sqrt(delka1)

    let delka2 = mnozit((enemyPos[0] - player2Pos[0]))+ mnozit((enemyPos[1] - player2Pos[1]))

    if (delka1 < delka2)
    {
        KamJdes(1)
    }
    else
    {
        KamJdes(2)
    }

}

function mnozit(cislo: number) {
    cislo = cislo * cislo

    return cislo
}

function KamJdes(enemyGoTO: number)
{
    if(enemyGoTO == 1)
    {
        if (Math.abs(enemyPos[0] - playerPos[0]) < Math.abs(enemyPos[1] - playerPos[1]))
        {
            if (enemyPos[0] - playerPos[0] > 0.1)
            {
                EnemyGo(0, 1)
            }
            else
            {
                EnemyGo(0, -1)
            }
        }
        else
        {
            if (enemyPos[1] - playerPos[1] > 0.1)
            {
                EnemyGo(1, 1)
            }
            else
            {
                EnemyGo(1, -1)
            }
        }   
    
    }
    else if(enemyGoTO == 2)
    {
        if (Math.abs(enemyPos[0] - playerPos[0]) < Math.abs(enemyPos[1] - playerPos[1])) 
        {
            if (enemyPos[0] - playerPos[0] > 0.1)
            {
                EnemyGo(0, 1)
            }
            else 
            {
                EnemyGo(0, -1)
            }
        }
        else
        {
            if (enemyPos[1] - playerPos[1] > 0.1) 
            {
                EnemyGo(1, 1)
            }
            else 
            {
                EnemyGo(1, -1)
            }
        }

    }
}

function EnemyGo(enemyParametr: number, plusminus: number)
{
    word[enemyPos[0]][enemyPos[1]] = 0
    enemyPos[enemyParametr] = enemyPos[enemyParametr] + plusminus
    word[enemyPos[0]][enemyPos[1]] = 2
}