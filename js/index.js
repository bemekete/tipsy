'use strict';

// const event_main = document.querySelectorAll('.event_main');

// event_main[0].addEventListener('mouserover',function(){

// });

const topfloatingbar = document.querySelector('.topfloatingbar');

document.addEventListener('scroll', function () {
    let posY = window.scrollY;

    if (posY === 0) {
        topfloatingbar.style.visibility = 'hidden';
        topfloatingbar.style.opacity = '0';
    }
    else if (posY > 10){
        topfloatingbar.style.visibility = 'visible';
        topfloatingbar.style.opacity = '.3';
        
    } 
});

