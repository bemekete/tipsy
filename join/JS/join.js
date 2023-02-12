const checkbox = document.querySelectorAll('.joinbox input');
const confirmAge = document.querySelector('#agree_age');

function checkAll() {
    if (checkbox[0].checked === true) {
        for (let i = 1; i < checkbox.length - 1; i++) {
            checkbox[i].checked = true;
        }
        confirmpop();
    } else {
        for (let i = 1; i < checkbox.length - 1; i++) {
            checkbox[i].checked = false;
        }
    }
}

confirmAge.addEventListener('click', () => {
    confirmAge.checked = false;
    confirmpop()
})

function confirmpop() {
    popup = open('./html/confirm.html', '본인인증', 'width=500px, height=700px');
}

if (popup.close()) {
    confirmAge.checked = true;
}