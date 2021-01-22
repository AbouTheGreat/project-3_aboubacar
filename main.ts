while (true) {
    light.setAll(color.rgb(0, 255, 0))
    console.log("light level: " + input.lightLevel() + " Sound level: " + input.soundLevel())
    if (input.lightLevel() >= 9) {
        console.log("Your lights are on, to stay safe turn them off")
        light.setAll(color.rgb(255, 100, 0))
        pause(500)
        light.clear()
        pause(500)
    }
    
    if (input.soundLevel() > 150) {
        console.log("A loud noise just occurred, stay alert!")
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
    }
    
}
