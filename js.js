const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const show = () => {
    if (pass.value.length > minValue && pass.value.match(letters)
        && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = "Twoje hasło jest bardzo mocno"
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters)
        && pass.value.match(numbers)) {
        p.textContent = "Masz dobre hasło"
        p.style.color = 'green'
    } else {
        p.textContent = 'Masz za słabe hasło kochaniutki'
        p.style.color = 'red'
    }
}

const checkPassword = () => {
    if (pass.value !== '') {
        show()
    } else {
        p.textContent = 'Nie podałeś hasła'
        p.style.color = ''
    }
}


pass.addEventListener('keyup', checkPassword)
