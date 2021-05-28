const teclas_o4 = document.querySelectorAll('.oitava[o4] > div')


teclas_o4.forEach(element => {
    element.onmousedown = () => {
        const selecteds = document.querySelectorAll('.oitava > .selecionada')
        if (selecteds.length) {
            selecteds[0].classList.remove('selecionada')
        }

        element.classList.add('selecionada')

          if (element.attributes['c']) {
            const ad = new Audio("./assets/audios/o4/Piano.mf.C5.mp3")
            ad.play()
        }
    }
})