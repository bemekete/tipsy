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

// 플로팅바////////////////////////////
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

////////////////////////////////// 슬라이드 ///////////////////////////////////
const main = document.querySelector('.main_container'),
    slideList = main.querySelector('.slide_list'),
    slideImg = slideList.getElementsByTagName('li'),
    [back, foward] = main.querySelectorAll('.main_container a'),
    pager = main.querySelector('.pager');

const pageOfPages = main.querySelector('.pageOfPages');

let idx = 0,
    beforeIdx = 0;
let autoslide;

let beforeTime = -new Date();
let delayTime = 1000;

// 페이지 태그
for (let i = 0; i < slideList.children.length; i++) {
    pager.appendChild(document.createElement('a')).dataset.idx = `${i}`;
}

const btn = pager.getElementsByTagName('a');
slideImg[beforeIdx].style.left = '0';
btn[beforeIdx].classList.add('nowPage');

// 각자 idx값 지정 후 슬라이드 구조 통일

// 페이지번호 나타내주기
pageOfPages.children[0].innerText = `${idx + 1} / ${slideImg.length}`;

// 자동 슬라이드

autoSlide();
function autoSlide() {
    autoslide = setInterval(() => {
        beforeIdx = idx;
        idx++;
        idx %= slideImg.length;

        slide(false);
        setTimeout(() => {
            pageOfPages.children[0].innerText = `${idx + 1} / ${
                slideImg.length
            }`;
        }, delayTime / 2);
    }, 3000);
}

// 클릭 시
main.addEventListener('click', (click) => {
    if (delay()) {
        const target = click.target.closest('a');

        // 오류 방지 코드
        if (target === null) return;

        // 이전 인덱스를 현재 인덱스로 바꿈
        beforeIdx = idx;

        // 화살표 클릭 시
        if (target.parentNode.className === 'main_container') {
            idx += +target.dataset.direction;
        }

        // 페이지 클릭 시
        if (target.parentNode.className === 'pager') {
            idx = +target.dataset.idx;
        }

        slide(true);
    }
});

function slide(rev1) {
    if (idx !== beforeIdx) {
        slideImg[beforeIdx].classList.remove('anime');
        slideImg[idx].classList.remove('anime');

        slideImg[idx].style.left = '100%';
        wait('-100%');

        if (rev1) {
            // 역방향
            if (idx < beforeIdx) {
                slideImg[idx].style.left = '-100%';
                wait('100%');
            }
        }

        btn[beforeIdx].classList.remove('nowPage');
        btn[idx].classList.add('nowPage');

        setTimeout(() => {
            pageOfPages.children[0].innerText = `${idx + 1} / ${
                slideImg.length
            }`;
        }, delayTime / 2);
    }
}

function wait(rev2) {
    setTimeout(() => {
        slideImg[beforeIdx].classList.add('anime');
        slideImg[idx].classList.add('anime');

        slideImg[idx].style.left = '0';
        slideImg[beforeIdx].style.left = rev2;
    }, 100);
}

function delay() {
    if (new Date() - beforeTime > delayTime + 100) {
        beforeTime = new Date();
        return true;
    }
}

slideList.addEventListener('mouseenter', () => {
    clearInterval(autoslide);
});

slideList.addEventListener('mouseleave', () => {
    autoSlide();
});
