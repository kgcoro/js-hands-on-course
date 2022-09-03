const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calDiscountPrice);

const couponList = [];

couponList.push({
    name: 'Normal',
    discount: 10,
});
couponList.push({
    name: 'Silver',
    discount: 20,
});
couponList.push({
    name: 'Gold',
    discount: 35,
});

function calDiscountPrice() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputDiscount.value;

    if (!price || !coupon) {
        pResult.innerText = 'Por favor llena con datos el formulario';
        return;
    }

    const discountValue = couponList.find(couponName => couponName.name == coupon)

    let discount;
    if (discountValue) {
        discount = discountValue.discount
    } else {
        pResult.innerText = 'No existe ese cupon';
        return;
    }

    console.log(discountValue)

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}