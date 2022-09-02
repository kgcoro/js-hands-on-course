const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calDiscountPrice);

function calDiscountPrice() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerText = 'Por favor llena con datos el dormulario';
        return;
    }

    if (discount >= 100) {
        pResult.innerText = 'No podemos regalarle el producto'
    } else {
        const newPrice = (price * (100 - discount)) / 100;
        pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
    }
}