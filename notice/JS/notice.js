const tbody = document.querySelector('tbody');

tbody.addEventListener('click', (e) => {
    const target = e.target.closest('TR');
    target.classList.toggle('active');
    // target.children[2].classList.toggle('active');
})