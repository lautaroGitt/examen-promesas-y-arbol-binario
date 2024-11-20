function delay(ms) {
    return new Promise(resolver => setTimeout(resolver, ms))
}

delay(2000).then(() => {
    console.log("Primera espera completada!")
return delay(2000)
}).then(() => {
    console.log("Segunda espera completada!")
    return delay(2000)
}).then(() => {
    console.log("Tercera espera completada!")
})

