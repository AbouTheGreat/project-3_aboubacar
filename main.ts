while (true) {
    music.setVolume(1000)
    console.log("light level: " + input.lightLevel() + " Sound level: " + input.soundLevel())
    if (input.soundLevel() > 180) {
        console.log("Someone just broke in, DEFEND UR HOUSE!!!")
        light.setAll(color.rgb(255, 0, 0))
        music.siren.playUntilDone()
        light.clear()
        light.setAll(color.rgb(255, 255, 255))
    } else if (input.lightLevel() > 5) {
        light.setAll(color.rgb(255, 255, 0))
    }
    
}
