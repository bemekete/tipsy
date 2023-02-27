// header category

const detailCategoryList = document.querySelector('.detailCategoryList'),
    drinkhoverOf = detailCategoryList.querySelector('.detailCategoryListof');

detailCategoryList.addEventListener('mouseover', (e) => {
    const [drinkhover, snackhover] = detailCategoryList.getElementsByClassName('hoverCategory');

    if (e.target === drinkhover) {
        drinkhoverOf.classList.remove('hidden')
    } else if (e.target === snackhover) {
        drinkhoverOf.classList.add('hidden');
    } else return;
})

detailCategoryList.addEventListener('mouseleave', () => {
    drinkhoverOf.classList.remove('hidden')
})


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
    confirmpop();
});

function confirmpop() {
    popup = open(
        './html/confirm.html',
        '본인인증',
        'width=500px, height=700px'
    );
}

if (popup.close()) {
    confirmAge.checked = true;
}

// 탑플로팅바
const topfloatingbar = document.querySelector('.topfloatingbar');

document.addEventListener('scroll', function () {
    let posY = window.scrollY;

    if (posY === 0) {
        topfloatingbar.style.visibility = 'hidden';
        topfloatingbar.style.opacity = '0';
    } else if (posY > 10) {
        topfloatingbar.style.visibility = 'visible';
        topfloatingbar.style.opacity = '.3';
    }
});
