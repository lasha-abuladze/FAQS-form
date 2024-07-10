'use strict'

const h3 = Array.from(document.getElementsByTagName('h3'))
const discription = Array.from(document.getElementsByClassName('discription'))
const hiddenSvg = Array.from(document.getElementsByClassName('hidden-svg'))



// console.log(h3)

// console.log(discription)

// console.log(hiddenSvg)


h3.forEach((element, index) => {
    h3[index].addEventListener('click', function() {

        discription[index].classList.toggle('visible')

        hiddenSvg[index].classList.toggle(`visible-svg`)
    })
} )