// header category

const detailCategoryList = document.querySelector('.detailCategoryList'),
    drinkhoverOf = detailCategoryList.querySelector('.detailCategoryListof');

detailCategoryList.addEventListener('mouseover', (e) => {
    const [drinkhover, snackhover] =
        detailCategoryList.getElementsByClassName('hoverCategory');

    if (e.target === drinkhover) {
        drinkhoverOf.classList.remove('hidden');
    } else if (e.target === snackhover) {
        drinkhoverOf.classList.add('hidden');
    } else return;
});

detailCategoryList.addEventListener('mouseleave', () => {
    drinkhoverOf.classList.remove('hidden');
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

// 유효성검사

function find_check() {
    let user_name = document.getElementById('user_name');
    let user_mobile = document.getElementById('user_mobile');
    let check_num = document.getElementById('check_num');

    if (user_name.value == '') {
        alert('이름을 입력하세요');
        user_name.focus();
        return false;
    }

    let nameCheck = /^[가-힣]+$/;

    if (!nameCheck.test(user_name.value)) {
        alert('이름을 확인하세요.');
        user_name.focus();
        return false;
    }

    if (user_mobile.value == '') {
        alert('휴대폰 번호를 입력하세요.');
        user_mobile.focus();
        return false;
    }

    let mobileCheck = /^[0-9]{8,13}$/;

    if (!mobileCheck.test(user_mobile.value)) {
        alert('전화번호를 확인하세요.');
        user_mobile.focus();
        return false;
    }

    if (check_num.value == '') {
        alert('인증번호를 입력하세요');
        check_num.focus();
        return false;
    }

    let checkNumCheck = /^[0-9]{6,6}$/;

    if (!checkNumCheck.test(check_num.value)) {
        alert('인증번호를 확인하세요.');
        check_num.focus();
        return false;
    }

    alert('회원님의 ID는 dlsr***** 입니다.');
    location.href = '../../index.html';
    return true;
}
