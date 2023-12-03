let btn = document.getElementById('tour-btn');
let tour = document.getElementById('tour');
let flag = true;

let btnClose = document.querySelector('.btn-close');
let banner = document.querySelector('.banner');
let offerButtons = document.querySelectorAll('.btn-offer');
let currentOffer = null;
let sendBtn = document.getElementById('sendForm');
let name = document.getElementById('name');
let data = document.getElementById('data');
let value = document.getElementById('value');
let mail = document.getElementById('mail');
let mob = document.getElementById('mob');
let alertBtn = document.getElementById('btn-alert');
let alert = document.getElementById('alert');



btn.addEventListener('click', () => {

    if (flag) {
        tour.style.display = 'flex';
        tour.style.height = 'max-content';
        flag = false;
    } else {
        tour.style.display = 'none';
        tour.style.height = '0';
        flag = true;
    }
})


btnClose.addEventListener('click', () => {
    banner.style.display = 'none';
})


let formToggle = function () {
    banner.style.display = 'flex';
    console.log(currentOffer);

}


// offerButtons.forEach((item) => {
//     item.addEventListener('click', () => {
//         currentOffer = item.dataset.tour;
//         formToggle();
//     })
// })
//
// sendBtn.addEventListener('click', () => {
//     let body = `    Имя:     ${name.value} <br><br>
//         Дата:     ${data.value} <br><br>
//         Количество гостей:    ${value.value} <br><br>
//         Номер:     ${mob.value} <br><br>
//         Мейл:      ${mail.value}
// `.toString();
//     let subject = `${currentOffer}`.toString();
//     Email.send({
//         SecureToken: '09a85a1a-a9d1-4b3c-8298-2d0fc230cabf',
//         To: 'cavidhaciyev00@mail.ru, kamranelli@gmail.com',
//         From: "kamranelli@gmail.com",
//         Subject: subject,
//         Body: body
//     })
//         .then((message) => {
//             if (message.toString() == 'OK') {
//                 banner.style.display = 'none';
//                 alert.style.display = 'flex';
//             } else {
//                 alert(message);
//             }
//         });
// })
//
//
// alertBtn.addEventListener('click', () =>{
//     alert.style.display = 'none';
// })

