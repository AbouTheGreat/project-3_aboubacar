while True:
    light.set_all(color.rgb(0, 255, 0))
    print ("light level: " + input.light_level() + " Sound level: " + input.sound_level())
    if input.light_level() >= 9:
        print("Your lights are on, to stay safe turn them off")
        light.set_all(color.rgb(255, 100, 0))
        pause(500)
        light.clear()
        pause(500)
    if input.sound_level() > 150:
        print("A loud noise just occurred, stay alert!")
        light.set_all(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
    
       