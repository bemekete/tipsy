const tbody = document.querySelector('tbody');

tbody.addEventListener('click', (e) => {
    let target = e.target;

    while (target.tagName !== 'TR') {
        if (target.className === 'innerCon') return;

        target = target.parentNode;

        if (target.tagName === 'BODY') return;
        if (!tbody.contains(target)) return;
    }
    target.classList.toggle('active');
    target.querySelector('img').classList.toggle('rotate');
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
