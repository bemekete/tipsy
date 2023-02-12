const category = document.querySelector('.category'),
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
]

let beforelist = categoryList.children[0];

categoryList.addEventListener('click', (e) => {
    const list = e.target.closest('LI');

    beforelist.classList.remove('nowpage');
    list.classList.add('nowpage');
    beforelist = list;

    for (let i = 0; i < categoryList.children.length; i++) {
        if (list === categoryList.children[i]) {
            listContents.querySelector('img').src = `${contentsImg[i]}`
        }
    }
    listContents.querySelector('span').innerText = list.innerText;
})