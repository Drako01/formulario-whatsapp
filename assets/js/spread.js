const 
    d = document,
    w = window,
    menu = d.querySelector('.menu-wa'),
    menuNav = d.querySelector('.whatsapp-menu'),
    cardNav = d.querySelector('.wa-panel'),
    inputName = d.querySelector('.name'),
    inputLastName = d.querySelector('.lastName'),
    inputMail = d.querySelector('.mail'),
    boton = d.querySelector('.botonWa'),
    prod = d.querySelector('.prod');



menu.addEventListener('click', () => {
    menuNav.classList.toggle("spread")
    cardNav.classList.toggle("spread")
    inputName.classList.toggle("spread")
    inputLastName.classList.toggle("spread")
    inputMail.classList.toggle("spread")
    boton.classList.toggle("spread")
    prod.classList.toggle("spread")
})


w.addEventListener('click', e => {
    if (menuNav.classList.contains('spread') && e.target != menuNav && e.target != cardNav && e.target != inputName && e.target != inputLastName && e.target != inputMail && e.target != boton  && e.target != prod && e.target != menu) {
        menuNav.classList.toggle("spread")
        cardNav.classList.toggle("spread")
        inputName.classList.toggle("spread")
        inputLastName.classList.toggle("spread")
        inputMail.classList.toggle("spread")
        boton.classList.toggle("spread")
        prod.classList.toggle("spread")
    }
})

