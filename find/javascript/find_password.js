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
    const user_email = document.getElementById('user_email'),
        user_mobile = document.getElementById('user_mobile'),
        check_num = document.getElementById('check_num');

    if (user_email.value == '') {
        alert('이메일을 입력하세요');
        user_email.focus();
        return false;
    }

    let emailtext =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailtext.test(user_email.value)) {
        alert('이메일형식이 올바르지 않습니다.');
        user_email.focus();
        return false;
    }

    if (user_mobile.value == '') {
        alert('휴대폰번호를 입력하세요.');
        user_mobile.focus();
        return false;
    }

    let mobileCheck = /^[0-9]{8,13}$/;

    if (!mobileCheck.test(user_mobile.value)) {
        alert('휴대폰번호를 확인하세요.');
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

    alert('회원님의 비밀번호는 @asd****234sd 입니다.');
    location.href = '../../index.html';
    return true;
}
