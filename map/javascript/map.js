'use strict';

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

let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.3503814, 127.1072135), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
let mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커가 표시될 위치입니다
let markerPosition = new kakao.maps.LatLng(37.3503814, 127.1072135);

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
let iwContent =
        '<div style="padding:5px;"><p style="font-weight: bold; font-size: 25px; margin-bottom: 10px">Tipsy</p><p style="margin-bottom: 5px;">경기도 성남시 분당구 돌마로 47 5층</p><a href="https://map.kakao.com/link/map/Tipsy,37.3503814,127.1072135" style="color:blue; font-size: 15px;" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Tipsy,37.3503814,127.1072135" style="color:blue; font-size: 15px;" target="_blank">길찾기</a></div>',
    iwPosition = new kakao.maps.LatLng(37.3503814, 127.1072135); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
let infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

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
