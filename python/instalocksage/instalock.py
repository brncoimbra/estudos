import pyautogui
from time import sleep
import keyboard as keyboard

sleep(2)

while True:
    pyautogui.click(900, 650)
    pyautogui.click(800, 600)
    if keyboard.is_pressed('q'):
        break