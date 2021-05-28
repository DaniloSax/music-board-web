const teclas_o3 = document.querySelectorAll('.oitava[o3] > div')

teclas_o3.forEach(element => {
    element.onmousedown = () => {
         const selecteds = document.querySelectorAll('.oitava > .selecionada')
        if (selecteds.length) {
            selecteds[0].classList.remove('selecionada')
        }

         element.classList.add('selecionada')

         if (element.attributes['c']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.C4.mp3")
            ad.play()
        }
         if (element.attributes['d']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.D4.mp3")
            ad.play()
        }
         if (element.attributes['e']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.E4.mp3")
            ad.play()
        }
         if (element.attributes['f']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.F4.mp3")
            ad.play()
        }
         if (element.attributes['g']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.G4.mp3")
            ad.play()
        }
         if (element.attributes['a']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.A4.mp3")
            ad.play()
        }
         if (element.attributes['b']) {
            const ad = new Audio("./assets/audios/o3/Piano.mf.B4.mp3")
            ad.play()
        }
    }
})