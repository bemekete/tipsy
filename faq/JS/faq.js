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
})