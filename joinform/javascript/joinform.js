// header category

const detailCategoryList = document.querySelector('.detailCategoryList'),
    drinkhoverOf = detailCategoryList.querySelector('.detailCategoryListof');

detailCategoryList.addEventListener('mouseover', (e) => {
    const [drinkhover, snackhover] = detailCategoryList.getElementsByClassName('hoverCategory');

    if (e.target === drinkhover) {
        drinkhoverOf.classList.remove('hidden')
    } else if (e.target === snackhover) {
        drinkhoverOf.classList.add('hidden');
    } else return;
})

detailCategoryList.addEventListener('mouseleave', () => {
    drinkhoverOf.classList.remove('hidden')
})


// 회원가입 유효성검사
function join_check() {
    let userID = document.getElementById('userID');
    let userPSW = document.getElementById('userPSW');
    let rePSW = document.getElementById('rePSW');
    let ckpwa = document.getElementById('ckpwa');
    let userName = document.getElementById('userName');
    let address = document.getElementById('address');
    let secondNum = document.getElementById('secondNum');
    let thirdNum = document.getElementById('thirdNum');
    let email = document.getElementById('email');
    let verificationCode = document.getElementById('verificationCode');

    if (userID.value == '') {
        alert('아이디를 입력하세요.');
        userID.focus();
        return false;
    }

    if (userPSW.value == '') {
        alert('비밀번호를 입력하세요.');
        userPSW.focus();
        return false;
    }

    let pwdCheck =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!pwdCheck.test(userPSW.value)) {
        alert(
            '비밀번호는 영문자+숫자+특수문자 조합으로 8자리이상 사용해야 합니다.'
        );
        userPSW.focus();
        return false;
    }

    if (rePSW.value !== userPSW.value) {
        alert('비밀번호가 일치하지 않습니다.');
        rePSW.focus();
        return false;
    }

    if (ckpwa.value === '') {
        alert('비밀번호 확인 답변을 입력하세요.');
        ckpwa.focus();
        return false;
    }

    if (userName.value == '') {
        alert('이름을 입력하세요.');
        userName.focus();
        return false;
    }

    if (address.value == '') {
        alert('상세주소를 입력해주세요');
        address.focus();
        return false;
    }

    if (secondNum.value == '') {
        alert('전화번호를 다시 확인하세요.');
        secondNum.focus();
        return false;
    }

    if (thirdNum.value == '') {
        alert('전화번호를 다시 확인하세요.');
        thirdNum.focus();
        return false;
    }

    if (verificationCode.value == '') {
        alert('인증번호를 입력하세요.');
        verificationCode.focus();
        return false;
    }

    let emailtext =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailtext.test(email.value)) {
        alert('이메일형식이 올바르지 않습니다.');
        email.focus();
        return false;
    }

    alert('회원가입이 완료되었습니다.');
    return true;
}

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
