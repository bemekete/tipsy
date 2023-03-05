// 상품 이름, 가격 저장
const title = document.querySelector('.detail_tit');

let titleTop = title.querySelector('.detail_tit_top span').innerText,
    price = title.querySelector('.price span').innerText.replace(',', '');


// 하단 플로팅 옵션뷰 내용 입력
const optionView = document.querySelector('.optionView'),
    option_tit_dl = optionView.querySelector('.option_tit dl'),
    option_select = optionView.querySelector('.option_select');

option_tit_dl.children[0].innerHTML = document.querySelector('.detail_tit_img').innerHTML;
option_tit_dl.children[1].innerText = titleTop;

option_select.querySelector('.optionSelect button').innerText = titleTop;



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



// 플로팅바 수량에 따른 가격 계산 함수
function calculation(target, pieces, numDown, numUp, calcPrice) {
    if (target === numDown) {
        if (pieces.value < 1) return; // 최소 수량 0
        pieces.value = +pieces.value - 1;
    }
    if (target === numUp) {
        if (pieces.value >= 20) return; // 최대 수량 20
        pieces.value = +pieces.value + 1;
    }

    let calc = `${price * pieces.value}`;
    calcPrice.innerText = Number(calc).toLocaleString('ko-KR'); // 반점 넣는 함수
}


function errorInput(option, pieces, elseText) {
    if (!(option.value) || +pieces.value === 0) {
        e.preventDefault();
        alert('옵션 및 수량을 입력해주세요.');
    } else {
        elseText;
    }
}


// 우측 플로팅바
const floatBar = document.querySelector('.rightFloat');

floatBar.addEventListener('click', (e) => {
    const target = e.target,
        option = floatBar.querySelector('.optOfProduct'),
        pieces = document.getElementById('pieces'), // 수량 input
        [numDown, numUp] = floatBar.getElementsByClassName('numfor'), // 수량 +-
        calcPrice = floatBar.querySelector('.productPrice span'), // 계산된 값
        basket = floatBar.querySelector('.popupBasket'); // 장바구니 플로팅 메시지

    calculation(target, pieces, numDown, numUp, calcPrice);

    // 구매하기 버튼 - 링크 이동
    if (target === floatBar.querySelector('.productBuy_btn a')) {
        if (!(option.value) || +pieces.value === 0) {
            e.preventDefault();
            alert('옵션 및 수량을 입력해주세요.');
        }
    }

    // 장바구니 버튼 - 플로팅 메시지
    if (target === floatBar.querySelector('.productBuy_btn div')) {
        if (!(option.value) || +pieces.value === 0) {
            alert('옵션 및 수량을 입력해주세요.');
        } else {
            basket.style.display = 'block';
        }
    }

    // 플로팅 메시지 삭제
    if (target === basket.querySelector('.popupClose') || target === basket.querySelector('.popupBasketBtn a')) {
        e.preventDefault();
        basket.style.display = 'none';
    }
});



// 하단 바 버튼 클릭 시 옵션뷰 오픈
const bottomSide = document.querySelector('.bottomSide'),
    bottomPopupBasket = bottomSide.querySelector('.bottomPopupBasket'); // 장바구니 플로팅 메시지
const bottomPieces = document.getElementById('bottomPieces');

let unHref;
unHref = !unHref; // e.preventDefault() 여부 결정 변수

bottomSide.addEventListener('click', (e) => {
    const target = e.target,
        count_button_box_a = optionView.querySelector('.count_button_box').getElementsByTagName('A')[0], // 옵션뷰 확인 버튼
        [basketBtn, purchaseBtn] = bottomSide.querySelectorAll('.bottomFloat div'); // 하단 바 버튼

    if (target === basketBtn || target === purchaseBtn) {
        bottomPieces.value = 0;
        optionView.classList.remove('displayNone');

        // 확인 버튼
        if (target === purchaseBtn) {
            count_button_box_a.href = "../createOrder/createOrder.html";
            unHref = !unHref;
            // 구매하기 - 페이지 전환
        } else {
            count_button_box_a.getElementsByTagName('A')[0].href = "#";
            unHref = unHref;
            // 장바구니 - 페이지 전환X
        }
    }

    // 장바구니 플로팅 메시지 삭제
    if (target === bottomPopupBasket.querySelector('.popupClose') || target === bottomPopupBasket.querySelector('.popupBasketBtn a')) {
        e.preventDefault();
        bottomPopupBasket.style.display = 'none';
    }
})



// 옵션뷰 내 버튼
optionView.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.overviewRemover img'), // X버튼
        cancelBtn = e.target.closest('.count_button_box div'), // 취소버튼
        buyBtn = e.target.closest('.count_button_box a'); // 구매버튼

    if (e.target.contains(closeBtn) || e.target.contains(cancelBtn) || e.target.contains(buyBtn)) {
        optionView.classList.add('displayNone');
    } else return;

    if (e.target.contains(buyBtn)) {
        if (+bottomPieces.value === 0) {
            e.preventDefault();
            alert('옵션 및 수량을 입력해주세요.');
        } else if (unHref) {
            e.preventDefault();
            bottomPopupBasket.style.display = 'block';
        }
    }
})


// 옵션뷰 수량 및 가격 수정
const option_select_btn = option_select.querySelector('.option_select_btn');

option_select_btn.addEventListener('click', (e) => {
    const target = e.target,
        // pieces = document.getElementById('bottomPieces'),
        [numUp, numDown] = option_select_btn.getElementsByTagName('button'),
        calcPrice = option_select.querySelector('.bottomCalcPrice');

    calculation(target, bottomPieces, numDown, numUp, calcPrice);
})



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