'use strict';
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

// 클릭하는 이벤트 a태그에 클래스 추가

// 클릭하면 백그라운드, 글자색 바뀜
const sortListCon = document.querySelector('.sortListCon');
sortListCon.addEventListener('click', function (e) {
    e.preventDefault();
    let eventTarget = e.target.closest('a');

    if (this.contains(eventTarget) && !(eventTarget.classList == 'btnClick')) {
        eventTarget.classList.add('btnClick');
    } else if (
        this.contains(eventTarget) &&
        eventTarget.classList == 'btnClick'
    ) {
        eventTarget.classList.remove('btnClick');
    }
});

// 좌측메뉴 세부사항 접기
sortListCon.addEventListener('click', function (e) {
    let target = e.target.closest('img');

    if (
        this.contains(target) &&
        !(target.parentNode.parentNode.children[1].classList == 'collapse_img')
    ) {
        target.parentNode.parentNode.children[1].classList.add('collapse_img');
        target.classList.add('rotate');
    } else if (
        this.contains(target) &&
        target.parentNode.parentNode.children[1].classList == 'collapse_img'
    ) {
        target.parentNode.parentNode.children[1].classList.remove(
            'collapse_img'
        );
        target.classList.remove('rotate');
    }
});

// 왼쪽 네비게이션바 초기화 버튼
// 초기화버튼
const sortFilter = document.querySelector('.sortFilter'),
    sortFilter_btn = sortFilter.querySelector('a');
// 필터버튼
const allA = sortListCon.getElementsByTagName('a');

sortFilter.addEventListener('click', function (e) {
    e.preventDefault();
    let eventTarget = e.target.closest('a');
    if (this.contains(eventTarget)) {
        for (let i = 0; i < allA.length; i++) {
            allA[i].classList.remove('btnClick');
        }
    }
});

// 클릭하면 볼드처리
const listSort = document.querySelector('.listSort'),
    listInfo1_a = listSort.getElementsByTagName('a');
let beforeBold = listInfo1_a[0];

listSort.addEventListener('click', function (e) {
    let eventTarget = e.target.closest('a');
    if (this.contains(eventTarget)) {
        beforeBold.classList.remove('txt_bold');
        eventTarget.classList.add('txt_bold');
        beforeBold = eventTarget;
    }
});

// 개수 나타내주기
const listLeng = document.querySelector('.listLeng'),
    price = document.getElementsByClassName('price');

listLeng.innerHTML = `<p>총 <b>${price.length}</b>개의 상품이 있습니다.</p>`;

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

// 더보기 버튼

const contents = document.querySelector('#contents'),
    btnMore = contents.querySelector('.btnMore');

btnMore.addEventListener('click', (e) => {
    e.preventDefault();
    const collapse_img = contents.querySelectorAll('.collapse_img');
    if (collapse_img.length > 9) {
        for (let i = 0; i < 9; i++) {
            collapse_img[i].classList.remove('collapse_img');
        }
    } else if (collapse_img) {
        for (let i = 0; i < collapse_img.length; i++) {
            collapse_img[i].classList.remove('collapse_img');
        }
        btnMore.classList.add('collapse_img');
    }
});
