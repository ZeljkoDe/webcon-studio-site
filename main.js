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

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});


// const sites = [
//     {
//         id: 1,
//         name: 'Site Name',
//         img: '../templated-roadtrip/images/banner2.jpg',
//         info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque animi labore dolores odit quos. Vel dolore quasi ut explicabo.Possimus rem id et, assumenda voluptatibus blanditiis obcaecati        ducimus.Neque quae velit, ipsa voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quaerat inventore architecto possimus    impedit at.Similique! dignissimos animi?',
//         link: '#'
//     },
//     {
//         id: 2,
//         name: 'Site Name',
//         img: '../templated-roadtrip/images/banner3.jpg',
//         info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque animi labore dolores odit quos. Vel dolore quasi ut explicabo.Possimus rem id et, assumenda voluptatibus blanditiis obcaecati        ducimus.Neque quae velit, ipsa voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quaerat inventore architecto possimus    impedit at.Similique! dignissimos animi?',
//         link: '#'
//     },

// ];


// const img = document.getElementById('img');
// const siteName = document.getElementById('siteName');
// const siteInfo = document.getElementById('siteInfo');
// const siteLink = document.getElementById('siteLink');
// const otherImg = document.getElementById('otherImg');

// let currentItem = 0;

// window.addEventListener('DOMContentLoaded', function () {
//     showPerson(currentItem);
// });

// otherImg.addEventListener('click', function () {
//     forEach;
// });

// function showPerson(person) {
//     const item = sites[person];
//     img.src = item.img;
//     siteName.textContent = item.name;
//     siteInfo.textContent = item.info;
//     siteLink.textContent = item.link;
// }

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});