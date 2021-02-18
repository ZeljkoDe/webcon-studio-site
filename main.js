'use strict';

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}


const sites = [
    {
        id: 1,
        imgName: 'Webcon',
        img: './img/webcon.png',
        tech: 'HTML, CSS, JS'
    },
    {
        id: 2,
        imgName: 'Webcon Studio',
        img: './img/webs.png',
        tech: 'WordPress teme'
    },
    {
        id: 3,
        imgName: 'Info 4 youth',
        img: './img/info4y.png',
        tech: 'WordPress custom teme'
    },
    {
        id: 4,
        imgName: 'Tornado',
        img: './img/tornado.png',
        tech: 'Blah blah'
    },
    {
        id: 5,
        imgName: 'Watchseries',
        img: './img/watch.png',
        tech: 'Blablabla'
    },
    {
        id: 6,
        imgName: 'Dailymotion',
        img: './img/daily.png',
        tech: 'bla'
    },

];

const img1 = (sites[0].id);
const img2 = (sites[1].id);
const img3 = (sites[2].id);
const img4 = (sites[3].id);
const img5 = (sites[4].id);
const img6 = (sites[5].id);

// console.log(img3);

const imgs = document.querySelectorAll('.images');
const tecsh = document.querySelector('#tech');
const siteName = document.querySelector('#siteName');
const bigImg = document.querySelector('.bigImg');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

imgs.forEach(function (img) {
    // console.log(img);
    img.addEventListener('click', function (e) {
        const idClick = Number(e.currentTarget.dataset.id);
        const click = idClick - 1;
        console.log(idClick);
        if (idClick === img1) {
            imgC(click);
        } else if (idClick === img2) {
            imgC(click);
        } else if (idClick === img3) {
            imgC(click);
        } else if (idClick === img4) {
            imgC(click);
        } else if (idClick === img5) {
            imgC(click);
        } else if (idClick === img6) {
            imgC(click);
        }
    });
    next.addEventListener('click', function () {
        console.log('clicked');
        img.style.transform = 'translateX(-270%)';
    });
    prev.addEventListener('click', function () {
        console.log('clicked');
        img.style.transform = 'translateX(0)';
    });
});

function imgC(img) {
    tecsh.innerHTML = sites[img].tech;
    siteName.innerHTML = sites[img].imgName;
    bigImg.src = sites[img].img;
    // console.log('true');
};






// function removeA() {
//     imgs.forEach(img => {
//         img.classList.remove('active');
//     });
// }
// function addA() {
//     imgs.forEach(img => {
//         img.classList.add('active');
//     });
// }
// imgs.forEach((img) => {
//     img.addEventListener('mouseenter', () => {
//         removeActiveClasses();
//         img.classList.add('active');
//     });
// });


var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});
