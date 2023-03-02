'use strict';

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

    if (!targetEvent) return

    beforeBtn.classList.remove('pointBtnd')
    targetEvent.classList.toggle('pointBtnd');
    coupon.textContent = targetEvent.parentNode.childNodes[1].textContent
    // console.log(targetEvent.parentNode.childNodes[1].textContent)

    beforeBtn = targetEvent
})


// 포인트 전액 사용
const pointAllBtn = main.querySelector('.pointAllBtn'),
    usePoint = main.querySelector('.usePoint'),
    PointNum = usePoint.getElementsByTagName('div'),
    couponPoint = main.querySelector('.couponPoint'),
    inputAll = couponPoint.getElementsByTagName('input'),
    point = main.getElementsByClassName('point');

let originalPoint = point[0].textContent,
    pointNum = 2000;

// 사용 가능한 포인트에서 originalPoint값 뽑아서 변수에 저쟝해둠
// 그 값을 클릭했을때 value값에 넣어줌 but, 사용할 포인트에 입력하면 값이 valu에
// 안들어가는듯. 초기화가 안됨. 그래서 이정도만 해둠
main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === pointAllBtn) {

        if (pointAllBtn.classList.toggle('pointBtnd')) {
            // input에 point 변수값 넣어주기.
            inputAll[1].setAttribute('value', originalPoint);
            point[0].textContent = 0;
            point[1].textContent = originalPoint;
            
            // pointNum = originalPoint;
        } else {
            point[0].textContent = originalPoint;
            point[1].textContent = 0;
            inputAll[1].setAttribute('value', '');
            
            // pointNum = 0;
        }
    }
})
console.log(pointNum)

// 이거 리액트로 onChange로 값 변하는거 비동기로 받고 어쩌구 해야할듯
// 입력 받은 값으로 계산서의 포인트 사용도 바꿔야함
// console.log(inputAll[1].textContent);


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


const totalProductMoneyTxt = document.getElementsByClassName('totalProductMoney'),
    deliveryMoneyTxt = document.getElementsByClassName('deliveryMoney'),
    totalDiscountTxt = document.getElementsByClassName('totalDiscount'),
    totalMoneyTxt = document.getElementsByClassName('totalMoney');

let couponDiscount = 3000;
// if (coupon.textContent !== '-') {
//     couponDiscount = +totalProductMoney/0.9;
// }
console.log(couponDiscount);

let totalProductMoney = 13000,
    deliveryMoney = 3000,
    // textContent가 안되서 위의 click이벤트에서 변수 설정해서 그 값
    // 넣어줄려고 했는데 안됨
    totalDiscount = (+pointNum + couponDiscount),
    totalMoney = (totalProductMoney + deliveryMoney - totalDiscount);


// 총 상품금액
totalProductMoneyTxt[0].textContent = totalProductMoney.toLocaleString(); // 상품 금액
totalProductMoneyTxt[1].textContent = totalProductMoney.toLocaleString(); // 주문 예정 상품
totalProductMoneyTxt[2].textContent = totalProductMoney.toLocaleString(); // 계산서
// 총 배송비
deliveryMoneyTxt[0].textContent = deliveryMoney.toLocaleString(); // 주문 예정 상품
deliveryMoneyTxt[1].textContent = deliveryMoney.toLocaleString(); // 계산서
// 총 할인 = 포인트 + 쿠폰
totalDiscountTxt[0].textContent = totalDiscount.toLocaleString(); // 계산서
// 총 결제 금액 = 총 상품금액 + 총 배송비 - 총 할인
totalMoneyTxt[0].textContent = totalMoney.toLocaleString(); // 계산서
totalMoneyTxt[1].textContent = totalMoney.toLocaleString(); // 버튼











// 총할인
// 쿠폰 + 포인트 사용
