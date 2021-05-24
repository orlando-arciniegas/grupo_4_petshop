const regex = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const fields = {
    first_name: false,
    last_name: false,
    email: false,
    password: false
}

let form = document.getElementById('registrar');
let inputs = document.querySelectorAll('#registrar input');
let terms = document.getElementById('tyc');
let msgSend = document.querySelector('.msgSend');

let validateForm = (e) => {
    switch (e.target.name) {
        case "first_name":
            validateInput(regex.usuario, e.target, 'first_name');
            break;
        case "last_name":
            validateInput(regex.nombre, e.target, 'last_name');
            break;
        case "email":
            validateInput(regex.correo, e.target, 'email');
            break;
        case "password":
            validateInput(regex.password, e.target, 'password');
            validatePassword();
            break;
        case "repeatPassword":
            validatePassword();

            break;
        default:
            break;
    }
}

let validatePassword = () => {
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');
    if (password.value !== repeatPassword.value) {
        repeatPassword.classList.add('is-invalid')
        repeatPassword.classList.remove('is-valid')
        fields['password'] = false;
    } else {
        repeatPassword.classList.remove('is-invalid')
        repeatPassword.classList.add('is-valid')
        fields['password'] = true;
    }
}

let validateInput = (regex, input, field) => {
    if (regex.test(input.value)) {
        document.getElementById(`${field}`).classList.remove('is-invalid')
        document.getElementById(`${field}`).classList.add('is-valid')
        fields[field] = true;
    } else {
        document.getElementById(`${field}`).classList.add('is-invalid')
        fields[field] = false;
    }
}

form.addEventListener('submit', (e) => {


    if (fields.first_name && fields.last_name && fields.email && fields.password && tyc.checked) {

        //form.reset();

        inputs.forEach((input) => {
            input.classList.remove('is-valid')
        })

         Swal.fire(
              'El formulario se ha enviado correctamente.',
              '',
              'success'
        )

        // Si prefieres el mensaje en el html y no una alerta //
        /*  msgSend.innerHTML += "El formulario se ha enviado correctamente."
         setTimeout(()=> {
          msgSend.innerHTML = "";
         }, 5000);*/
    } else {
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar correctamente todos los campos del formulario'
        })
        /*
        msgSend.innerHTML += "Debes completar el formulario correctamente."
         setTimeout(()=> {
          msgSend.innerHTML = "";
         }, 5000);*/
    }
})

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})