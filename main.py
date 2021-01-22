while True:
    print ("light level: " + input.light_level() + " Sound level: " + input.sound_level())
    if input.sound_level() > 100 + input.light_level() > 5:
        print("Loud noise detected, keep you're lights off to stay safe!")
        light.set_brightness(1000)
        light.set_all(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
        light.set_all(color.rgb(255, 0, 0))
        pause(500)
        light.set_all(color.rgb(255, 0, 0))
    if input.sound_level() > 100 :
        print("There was a loud noise! Your lights are already off, make sure you're safe!")
        light.set_brightness(1000)
        light.set_all(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
        light.set_all(color.rgb(255, 0, 0))
        pause(500)
        light.set_all(color.rgb(255, 0, 0))
    
    
           
           