document.addEventListener('keypress', event => {
    const keyName = event.key

    if (keyName === 'c') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.C3.mp3")
        ad.play()
    }
    if (keyName === 'd') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.D3.mp3")
        ad.play()
    }
    if (keyName === 'e') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.E3.mp3")
        ad.play()
    }
    if (keyName === 'f') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.F3.mp3")
        ad.play()
    }
    if (keyName === 'g') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.G3.mp3")
        ad.play()
    }
    if (keyName === 'a') {
         const ad = new Audio("./assets/audios/o2/Piano.mf.A3.mp3")
        ad.play()
    }
    if (keyName === 'b') {
        const ad = new Audio("./assets/audios/o2/Piano.mf.B3.mp3")
        ad.play()
    }
})