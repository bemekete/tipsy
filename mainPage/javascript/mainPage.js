'use strict';
// 클릭하는 이벤트 a태그에 클래스 추가

// 클릭하면 백그라운드, 글자색 바뀜
const sortListCon = document.querySelector('.sortListCon');

sortListCon.addEventListener('click', function (e) {
    let eventTarget = e.target.closest('a');
    if (this.contains(eventTarget)) {
        eventTarget.style.backgroundColor = '#333';
        eventTarget.style.color = 'white';
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

// 왼쪽 네비게이션바 초기화 버튼
const sortFilter = document.querySelector('.sortFilter'),
    sortFilter_btn = sortFilter.querySelector('a');
const allA = sortListCon.getElementsByTagName('a');

sortFilter.addEventListener('click', function (e) {
    let eventTarget = e.target.closest('a');
    if (this.contains(eventTarget)) {
        for (let i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = '#f9f9f9';
            allA[i].style.color = 'black';
        }
    }
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
