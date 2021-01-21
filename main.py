while True:
    music.set_volume(1000)
    print ("light level: " + input.light_level() + " Sound level: " + input.sound_level())
    if input.sound_level() > 180:
        print("Someone just broke in, DEFEND UR HOUSE!!!")
        light.set_all(color.rgb(255, 0, 0))
        music.siren.play_until_done()
        light.clear()
        light.set_all(color.rgb(255, 255, 255))
    elif input.light_level() > 5:
        light.set_all(color.rgb(255, 255, 0))
    
    
    
           
           