'use strict'
// 클릭하는 이벤트 a태그에 클래스 추가


// 클릭하면 백그라운드, 글자색 바뀜
const sortListCon = document.querySelector('.sortListCon');

sortListCon.addEventListener('click', function (e) {
      let eventTarget = e.target.closest('a');
      if (this.contains(eventTarget)) {
            eventTarget.style.backgroundColor = '#333';
            eventTarget.style.color = 'white';
      }
})


// 클릭하면 볼드처리
const listSort = document.querySelector('.listSort'),
      listInfo1_a = listSort.getElementsByTagName('a');
let beforeBold = listInfo1_a[0];

listSort.addEventListener('click', function (e) {
      let eventTarget = e.target.closest('a');
      if (this.contains(eventTarget)) {
            beforeBold.classList.remove('txt_bold')
            eventTarget.classList.add('txt_bold');
            beforeBold = eventTarget;
      }
})

// 개수 나타내주기
const listLeng = document.querySelector('.listLeng'),
      price = document.getElementsByClassName('price');

listLeng.innerHTML = `<p>총 <b>${price.length}</b>개의 상품이 있습니다.</p>`

