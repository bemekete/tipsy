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

// 취소 버튼 클릭시 메인화면으로 
