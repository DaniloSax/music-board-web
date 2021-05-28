const teclas_o1 = document.querySelectorAll('.oitava[o1] > div')

teclas_o1.forEach(element => {
    element.onmousedown = () => {
        const selecteds = document.querySelectorAll('.oitava > .selecionada')
        if (selecteds.length) {
            selecteds[0].classList.remove('selecionada')
        }

        if (element.attributes['c']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.C2.mp3")
            ad.play()
        }
        if (element.attributes['d']) {
            const ad = new Audio("../assets/audios/o1/Piano.mf.D2.mp3")
            ad.play()
        }
        if (element.attributes['e']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.E2.mp3")
            ad.play()
        }
        if (element.attributes['f']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.F2.mp3")
            ad.play()
        }
        if (element.attributes['g']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.G2.mp3")
            ad.play()
        }
        if (element.attributes['a']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.A2.mp3")
            ad.play()
        }
        if (element.attributes['b']) {
            const ad = new Audio("./assets/audios/o1/Piano.mf.B2.mp3")
            ad.play()
        }

        element.classList.add('selecionada')
     }
})



