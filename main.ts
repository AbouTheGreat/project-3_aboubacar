while (true) {
    console.log("light level: " + input.lightLevel() + " Sound level: " + input.soundLevel())
    if (input.soundLevel() > 100 + input.lightLevel() && 100 + input.lightLevel() > 5) {
        console.log("Loud noise detected, keep you're lights off to stay safe!")
        light.setBrightness(1000)
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        light.setAll(color.rgb(255, 0, 0))
    }
    
    if (input.soundLevel() > 100) {
        console.log("There was a loud noise! Your lights are already off, make sure you're safe!")
        light.setBrightness(1000)
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        light.setAll(color.rgb(255, 0, 0))
    }
    
}
