'use strict';

const bodyHidden = document.querySelector('body'),
    td_count_Pdt = bodyHidden.querySelectorAll('.td_count_Pdt'),
    count_Pdt = bodyHidden.querySelectorAll('.count_Pdt'),
    optionView = bodyHidden.querySelector('.optionView'),
    goods_count_box = bodyHidden.querySelector('.goods_count_box'),
    table = bodyHidden.querySelector('table'),
    CartHead = bodyHidden.querySelector('thead'),
    CartBody = bodyHidden.querySelector('tbody'),
    allCheck = document.getElementById('allCheck'),
    CartBodyInput = CartBody.querySelectorAll('input'),
    order_sum_price = CartBody.querySelectorAll('.order_sum_price'),
    td_delivery = CartBody.querySelectorAll('.td_delivery'),
    goods_num = CartBody.querySelectorAll('.goods_num'),
    price_sum_list = bodyHidden.querySelector('.price_sum_list'),
    price_sum_num = price_sum_list.querySelectorAll('strong'),
    goods_img = CartBody.querySelectorAll('.goods_img'),
    count_box_main = document.querySelector('.count_box_main'),
    count_box_dl = count_box_main.querySelector('dl'),
    td_goods = CartBody.querySelectorAll('.td_goods'),
    goods_delete_btn = document.querySelector('.goods_delete_btn'),
    no_data = document.querySelector('.no_data'),
    txt = CartBody.querySelectorAll('.txt');


const checkedInput = 'input:checked';

let checkedElementCnt;
// 체크박스 함수 //
function otherCheckbox(value) {
    for (let i = 0; i < CartBodyInput.length; i++) {
        CartBodyInput[i].checked = value;
    }
}

function headCheckbox(value) {
    allCheck.checked = value;
}

function CheckedBlock() {
    const checkedElement = CartBody.querySelectorAll(checkedInput);
    checkedElementCnt = checkedElement.length;
}

// 상품 총 가격 함수
function reloadSum() {
    let sum, deli, laterSum = 0, laterDeli = 0;
    for (let i = 0; i < CartBodyInput.length; i++) {
        CartBodyInput[i].checked === true ? sum = txt[i].textContent.replace(',', '') : sum = 0;
        CartBodyInput[i].checked === true ? deli = '3000' : deli = 0;
        laterSum += Number(sum);
        laterDeli += Number(deli);
        if (laterDeli) laterDeli = '3,000';
        price_sum_num[1].textContent = laterSum.toLocaleString();
        price_sum_num[2].textContent = laterDeli;
        price_sum_num[3].textContent = (Number(price_sum_num[1].textContent.replace(',', '')) + Number(price_sum_num[2].textContent.replace(',', ''))).toLocaleString();
    }

}

// 합계금액 표시
for (let i = 0; i < (goods_num.length * 2 - 1); i += 2) {
    order_sum_price[i + 1].textContent = order_sum_price[i].textContent.split('원', [1]) * goods_num[i / 2].children[0].textContent.split('개', [1]);
}

// 가격 및 배송비 천단위 마다 반점(,) 삽입

for (let i = 0; i < order_sum_price.length; i++) {
    order_sum_price[i].textContent = Number(order_sum_price[i].textContent.split('원', [1])).toLocaleString();

}
for (let i = 0; i < td_delivery.length; i++) {
    td_delivery[i].textContent = Number(td_delivery[i].children[0].textContent.split('원', [1])).toLocaleString();

}

// 체크박스 선택 부분

CartHead.addEventListener('input', function () {
    allCheck.checked ? otherCheckbox(true) : otherCheckbox(false);
});
CartBody.addEventListener('input', function () {
    CartBodyInput[0].checked && CartBodyInput[1].checked ? headCheckbox(true) : headCheckbox(false);
});

table.addEventListener('input', function () {
    reloadSum();
});


// 체크 박스 선택에 따른 가격 및 수량 변경 부분


window.addEventListener('load', function () {
    reloadSum();
    CheckedBlock();
    price_sum_num[0].textContent = checkedElementCnt;
    let sum = 0;
    for (let i = 0; i < (goods_num.length * 2 - 1); i += 2) {
        sum += Number(order_sum_price[i + 1].textContent.replace(',', ''));
        price_sum_num[1].textContent = sum.toLocaleString();

    }
})
table.addEventListener('input', function () {
    CheckedBlock();
    price_sum_num[0].textContent = checkedElementCnt;

});

// 옵션/수량 변경 부분 (클릭 시)

for (let i = 0; i < td_count_Pdt.length; i++) {
    td_count_Pdt[i].addEventListener('click', function (e) {
        e.preventDefault();
        let orderBtn = e.target.closest('a');
        if (this.contains(orderBtn)) {
            bodyHidden.classList.add('nonOverscroll');
            optionView.classList.remove('displayNone');
        }
        count_box_dl.children[0].innerHTML = goods_img[i].parentNode.innerHTML;
        count_box_dl.children[1].innerHTML = td_goods[i].textContent;

    });
}

//옵션 수량 변경 부분 (변경 창 전체)
goods_count_box.addEventListener('click', function (e) {
    e.preventDefault();
    let closeBtn = e.target.closest('span');
    if (this.contains(closeBtn)) {
        bodyHidden.classList.remove('nonOverscroll');
        optionView.classList.add('displayNone');
    }
});

// 선택 상품 삭제

goods_delete_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm('정말 삭제하시겠습니까?')) {
        for (let i = 0; i < CartBodyInput.length; i++) {
            if (CartBodyInput[i].checked) {
                CartBody.children[i].style.display = 'none';
            }
            if (allCheck.checked) {
                CartHead.children[0].style.display = 'none';
                no_data.classList.remove('displayNone');
            }
        }
    }
});

