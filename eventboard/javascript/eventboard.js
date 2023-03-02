// header category

const detailCategoryList = document.querySelector('.detailCategoryList'),
    drinkhoverOf = detailCategoryList.querySelector('.detailCategoryListof'),
    maincontainer = document.getElementById('maincontainer'),
    atag = maincontainer.querySelectorAll('a');


// a태그 이벤트 금지

for (let i = 0; i < atag.length; i++) {
    atag[i].addEventListener('click', function (e) {
        e.preventDefault();
    });
}

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


// 탑 플로팅바

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
