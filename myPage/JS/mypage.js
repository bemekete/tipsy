const profileBox = document.querySelector('.profileBox'),
    category = document.querySelector('.category'),
    categoryList = category.querySelector('.categoryList'),
    listContents = category.querySelector('.listContents');

const contentsImg = [
    './image/noun-shipment-1540091.png',
    './image/noun-coin-1060770.png',
    './image/noun-coupon-139423.png',
    './image/noun-browser-552736.png',
    './image/noun-heart-10024.png',
    './image/noun-produce-2823265.png',
    './image/noun-style-4384241.png',
];

let beforelist = categoryList.children[0],
    nowPage,
    i = 0;

function changePage() {
    beforelist.classList.remove('nowpage');
    nowPage.classList.add('nowpage');
    beforelist = nowPage;

    for (let j = 0; j < categoryList.children.length; j++) {
        if (nowPage === categoryList.children[j]) {
            listContents.querySelector('img').src = `${contentsImg[j]}`;
        }
    }
    listContents.querySelector('span').innerText = nowPage.innerText;
}

categoryList.addEventListener('click', (e) => {
    const list = e.target.closest('LI');
    nowPage = list;

    changePage();
});

profileBox.addEventListener('click', (e) => {
    const part = e.target.closest('A');
    switch (part.parentNode.className) {
        case 'profile part2':
            i = 1;
            break;
        case 'profile part3':
            i = 2;
            break;
        case 'profile part4':
            i = 6;
            break;
    }
    nowPage = categoryList.children[i];

    changePage();
});

// 탑 플로팅바
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
