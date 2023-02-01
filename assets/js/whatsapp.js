const $form = document.querySelector('#form-wa');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://wa.me/';
const urlMobile = 'whatsapp://';
const phone = '5491122223333';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#nombres').value
        let lastname = document.querySelector('#apellidos').value
        let email = document.querySelector('#emails').value
        let prodf = document.querySelector('#producto').value
        let message = 'send?phone=' + phone + '&text=*_Formulario de BellaGema_*%0A%0A*_Mi Nombre es:_*%0A' + name + '%0A*_Mi Apellido:_*%0A' + lastname + '%0A*_Mi Correo:_*%0A' + email + '%0A%0A' + prodf + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 2000);

});
