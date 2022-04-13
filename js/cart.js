const btnplus = document.querySelectorAll('.btn-plus');
const btnminus = document.querySelectorAll('.btn-minus');
const input = document.querySelectorAll('.input');
let cartValue = document.querySelector('.cart-value');

function setPrice(qty, price) {
    cartValue.innerHTML = qty * price + ' ₽';
    console.log(cartValue)
}
btnplus.forEach((item, i) => {
    item.addEventListener('click', () => {
        input[i].value++;
        setPrice(input[i].value, input[i].dataset.price);

    })
})
btnminus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (input[i].value > 0) {
            input[i].value--;
        }
        if (input[i].value == 0) {
            cartValue.innerHTML = 0 + ' ₽';
        }
        s
        setPrice(input[i].value);
    })
})

const btnplus1 = document.querySelectorAll('.btn-plus-1');
const btnminus1 = document.querySelectorAll('.btn-minus-1');
const input1 = document.querySelectorAll('.input-1');
let cartValue1 = document.querySelector('.cart-value-1');

function setPrice(qty, price) {
    cartValue1.innerHTML = qty * price + ' ₽';
    console.log(cartValue1)
}
btnplus1.forEach((item, i) => {
    item.addEventListener('click', () => {
        input[i].value++;
        setPrice(input[i].value, input[i].dataset.price);

    })
})
btnminus1.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (input[i].value > 0) {
            input[i].value--;
        }
        if (input[i].value == 0) {
            cartValue1.innerHTML = 0 + ' ₽';
        }
        s
        setPrice(input[i].value);
    })
})

let totalPrice = document.querySelector('.total-price');
totalPrice.innerHTML = 'TOTAL: ' + cartValue + cartValue1 + ' ₽';



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: "auto",
});