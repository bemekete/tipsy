'use strict';

const main = document.getElementById('main'),
    main_down = main.getElementsByClassName('main_down'),
    couponclickBtn = main.querySelector('.couponclickBtn'),
    agreeText = main.querySelector('.agreeText');


main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === main_down[0]) {
        // 열고 닫기
        couponclickBtn.classList.toggle('main_none');
        // 버튼 방향 up, down
        targetEvent.classList.toggle('main_up');

    } else if (targetEvent === main_down[1]) {
        agreeText.classList.toggle('main_none');
        targetEvent.classList.toggle('main_up');

    } else return;
})


// 포인트 사용
const pointAllBtn = main.querySelector('.pointAllBtn'),
    usePoint = main.querySelector('.usePoint'),
    PointNum = usePoint.getElementsByTagName('div'),
    couponPoint = main.querySelector('.couponPoint'),
    inputAll = couponPoint.getElementsByTagName('input'),
    point = main.getElementsByClassName('point');

let originalPoint = 0;

main.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent === pointAllBtn) {
        
        if (pointAllBtn.classList.toggle('pointBtnd')) {
            // input에 point 변수값 넣어주기.
            inputAll[1].setAttribute('value', point[0].textContent);
            originalPoint = point[0].textContent;
            point[0].textContent = '0';
            point[1].textContent = originalPoint;
        } else {
            point[0].textContent = originalPoint;
            point[1].textContent = '0';
            inputAll[1].setAttribute('value', '');

        }
    }
})

// 이거 리액트로 onChange로 값 변하는거 비동기로 받고 어쩌구 해야할듯
// 입력 받은 값으로 계산서의 포인트 사용도 바꿔야함
console.log(inputAll[1].textContent);


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


