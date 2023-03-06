// header category

const detailCategoryList = document.querySelector('.detailCategoryList'),
    drinkhoverOf = detailCategoryList.querySelector('.detailCategoryListof');

detailCategoryList.addEventListener('mouseover', (e) => {
    const [drinkhover, snackhover] =
        detailCategoryList.getElementsByClassName('hoverCategory');

    if (e.target === drinkhover) {
        drinkhoverOf.classList.remove('hidden');
    } else if (e.target === snackhover) {
        drinkhoverOf.classList.add('hidden');
    } else return;
});

detailCategoryList.addEventListener('mouseleave', () => {
    drinkhoverOf.classList.remove('hidden');
});

// 아코디언
const tbody = document.querySelector('tbody');

tbody.addEventListener('click', (e) => {
    let target = e.target;

    while (target.tagName !== 'TR') {
        if (target.className === 'innerCon active') return;
        target = target.parentNode;

        if (target.tagName === 'BODY') return;
        if (!tbody.contains(target)) return;
    }

    target.querySelector('.innerCon').classList.toggle('active');
    target.querySelector('img').classList.toggle('rotate');
});

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

const notice_box = document.querySelector('.notice_box');

notice_box.addEventListener('click', (e) => {
    e.preventDefault();
});
