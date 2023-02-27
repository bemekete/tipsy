// 상품 이름, 가격 저장
const title = document.querySelector('.detail_tit');

let titleTop = title.querySelector('.detail_tit_top span'),
    price = title.querySelector('.price span');

titleTop = titleTop.innerText;
price = price.innerText.replace(',', '');

// 플로팅바 수량에 따른 가격 검색 기능
const floatBar = document.querySelector('.rightFloat'),
    pieces = document.getElementById('pieces'),
    [numDown, numUp] = floatBar.getElementsByClassName('numfor'),
    calcPrice = floatBar.querySelector('.productPrice span');

// 장바구니 팝업
const basket = floatBar.querySelector('.popupBasket');

floatBar.addEventListener('click', (e) => {
    const target = e.target;

    if (target === numDown) {
        if (pieces.value < 1) return;
        pieces.value = +pieces.value - 1;
    }
    if (target === numUp) {
        if (pieces.value >= 20) return;
        pieces.value = +pieces.value + 1;
    }
    let calc = `${price * pieces.value}`;
    calcPrice.innerText = Number(calc).toLocaleString('ko-KR');

    if (target === floatBar.querySelector('.productBuy_btn button')) {
        basket.style.display = 'block';
    }
    if (target === basket.querySelector('.popupClose')) {
        basket.style.display = 'none';
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
