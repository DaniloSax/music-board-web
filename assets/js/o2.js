const teclas_o2 = document.querySelectorAll('.oitava[o2] > div')

teclas_o2.forEach(element => {
    element.onmousedown = () => {
         const selecteds = document.querySelectorAll('.oitava > .selecionada')
        if (selecteds.length) {
            selecteds[0].classList.remove('selecionada')
        }

         element.classList.add('selecionada')

         if (element.attributes['c']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.C3.mp3")
            ad.play()
        }
         if (element.attributes['d']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.D3.mp3")
            ad.play()
        }
         if (element.attributes['e']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.E3.mp3")
            ad.play()
        }
         if (element.attributes['f']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.F3.mp3")
            ad.play()
        }
         if (element.attributes['g']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.G3.mp3")
            ad.play()
        }
         if (element.attributes['a']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.A3.mp3")
            ad.play()
        }
         if (element.attributes['b']) {
            const ad = new Audio("./assets/audios/o2/Piano.mf.B3.mp3")
            ad.play()
        }
    }
})