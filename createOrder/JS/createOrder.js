'use strict';

let main = document.getElementById('main'),
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