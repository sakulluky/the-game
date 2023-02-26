def on_button_pressed_a():
    if rotation[0] == 1 and rotation[1] == 0:
        rotation[0] = 0
        rotation[1] = -1
    elif rotation[0] == 0 and rotation[1] == -1:
        rotation[0] = -1
        rotation[1] = 0
    elif rotation[0] == -1 and rotation[1] == 0:
        rotation[0] = 0
        rotation[1] = 1
    elif rotation[0] == 0 and rotation[1] == 1:
        rotation[0] = 1
        rotation[1] = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def Render():
    for k in range(6):
        pass
rotation: List[number] = []
rotation = [1, 0]
playerPos = [10, 10]
led.plot(2, 2)