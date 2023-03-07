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




// 값 
const totalProductMoneyTxt = document.getElementsByClassName('totalProductMoney'),
    deliveryMoneyTxt = document.getElementsByClassName('deliveryMoney'),
    totalDiscountTxt = document.getElementsByClassName('totalDiscount'),
    totalMoneyTxt = document.getElementsByClassName('totalMoney');

let totalProductMoney = 13000,
    deliveryMoney = 3000,
    totalDiscount = 0,
    totalMoney = totalProductMoney + deliveryMoney;

let inputPoint = 0, inputCoupon = 0;

function totalCal(inputPoint, inputCoupon) {
    totalDiscount = inputPoint + inputCoupon;
    totalMoney = totalProductMoney + deliveryMoney - totalDiscount;

    totalDiscountTxt[0].innerText = `${totalDiscount.toLocaleString()}`;
    totalMoneyTxt[0].innerText = `${totalMoney.toLocaleString()}`;
}

// 총 상품금액
totalProductMoneyTxt[0].textContent = totalProductMoney.toLocaleString(); // 상품 금액
totalProductMoneyTxt[1].textContent = totalProductMoney.toLocaleString(); // 주문 예정 상품
totalProductMoneyTxt[2].textContent = totalProductMoney.toLocaleString(); // 계산서
// 총 배송비
deliveryMoneyTxt[0].textContent = deliveryMoney.toLocaleString(); // 주문 예정 상품
deliveryMoneyTxt[1].textContent = deliveryMoney.toLocaleString(); // 계산서
// 총 할인 = 포인트 + 쿠폰
totalDiscountTxt[0].textContent = totalDiscount.toLocaleString(); // 계산서 (기본값 땜)
// 총 결제 금액 = 총 상품금액 + 총 배송비 - 총 할인
totalMoneyTxt[0].textContent = totalMoney.toLocaleString(); // 계산서 (기본값 땜)



// 열고 닫기
const main = document.getElementById('main'),
    main_down = main.getElementsByClassName('main_down'),
    couponClickBtn = main.querySelector('.couponClickBtn'),
    agreeText = main.querySelector('.agreeText');


main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === main_down[0]) {
        // 열고 닫기
        couponClickBtn.classList.toggle('main_none');
        // 버튼 방향 up, down
        targetEvent.classList.toggle('main_up');

    } else if (targetEvent === main_down[1]) {
        agreeText.classList.toggle('main_none');
        targetEvent.classList.toggle('main_up');

    } else return;
})


/* ---------------------------- 값 ------------------------------- */
// - 쿠폰 선택
// - 포인트 전액 사용
// - 결제 수단

const couponBtn = couponClickBtn.getElementsByTagName('button'),
    couponClickdiv = couponClickBtn.getElementsByTagName('div'),
    couponChoiceBtn = couponClickBtn.getElementsByClassName('couponChoiceBtn'),
    coupon = main.querySelector('.coupon');

let beforeBtn = couponBtn[0];

// 쿠폰 선택
couponClickBtn.addEventListener('click', (e) => {
    const targetEvent = e.target.closest('button');

    if (!targetEvent) return;

    beforeBtn.classList.remove('pointBtnd')
    targetEvent.classList.toggle('pointBtnd');
    coupon.textContent = targetEvent.parentNode.childNodes[1].textContent

    beforeBtn = targetEvent

    inputCoupon = +targetEvent.parentNode.childNodes[1].dataset.couponWon;
    totalCal(inputPoint, inputCoupon);
})


// 쿠폰 등록
const inputCouponBtn = main.querySelector(".couponBtn");

main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === inputCouponBtn) {
        alert('쿠폰 존재하지 않음');
    }
})

// 결제하기 결제방법 
const submitBtn = main.querySelector('.submitBtn button');

main.addEventListener('click', (e) => {
    const targetEvent = e.target

    if (targetEvent === submitBtn) {
        
        if (payment.textContent == '-') {
            e.preventDefault();
            alert('결제방법을 선택해주세요.');
        } 
    }
})


// 포인트 전액 사용
const pointAllBtn = main.querySelector('.pointAllBtn'),
    usePoint = main.querySelector('.usePoint'),
    PointNum = usePoint.getElementsByTagName('div'),
    couponPoint = main.querySelector('.couponPoint'),
    inputAll = couponPoint.getElementsByTagName('input'),
    point = main.getElementsByClassName('point');

// let originalPoint2 = point[0].textContent,
const originalPoint = 2000;
point[0].textContent = originalPoint.toLocaleString();
const originalPoint2 = point[0].textContent;


main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === pointAllBtn) {

        if (pointAllBtn.classList.toggle('pointBtnd')) {
            // inputValue 기본값으로 초기화 해주기
            inputAll[1].value = originalPoint2;

            // input에 point 변수값 넣어주기.
            inputAll[1].setAttribute('value', originalPoint2);
            point[0].textContent = 0;
            point[1].textContent = originalPoint2;

        } else {
            inputAll[1].value = "";

            point[0].textContent = originalPoint2;
            point[1].textContent = 0;
            inputAll[1].setAttribute('value', '');

        }
        console.log(inputAll[1].value);
    }

    inputPoint = +point[1].textContent.replace(',', '');
    totalCal(inputPoint, inputCoupon);
})


// 포인트 input
const main_input = main.getElementsByClassName('main_input');
let inputValue = 0;

main.addEventListener('input', (e) => {
    const targetEvent = e.target;

    if (targetEvent == main_input[1]) {
        let inputPoint = +inputAll[1].value;

        inputValue = originalPoint - inputPoint;
        if (inputValue >= 0) {
            point[0].textContent = inputValue.toLocaleString();
            point[1].textContent = inputPoint.toLocaleString();
        } else {
            point[0].textContent = originalPoint2;
        }

        if (inputPoint > originalPoint) {
            // console.log('에휴');
            alert('다시 입력하3');
            inputAll[1].value = "";
            point[1].innerText = "0";
        }
    }

    totalCal(inputPoint, inputCoupon);
})



// 결제방법
const paymentMethod = main.querySelector('.paymentMethod'),
    clickEvent = paymentMethod.getElementsByTagName('div'),
    payment = main.querySelector('.payment');
// console.log(paymentMethod);
// console.log(clickEvent);

let before = clickEvent[0];

paymentMethod.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent !== paymentMethod) {
        before.classList.remove('paymentBackColor')
        // console.log(targetEvent);
        targetEvent.classList.add('paymentBackColor');
        // console.log(targetEvent.textContent)
        payment.textContent = targetEvent.textContent;

        before = targetEvent;
    }
})





