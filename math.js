console.group('Cuadrado')

function calculoCuadrado(lado) {
    return {
        area: (lado ** 2),
        perimetro: (lado * 4)
    };
}

console.log(calculoCuadrado(5));

console.groupEnd('Cuadrado')

console.group('Circulo')

function calculoCirculo(radio) {
    return {
        circunferencia: (radio * 2) * Math.PI,
        areaCirculo: Math.pow(radio, 2) * Math.PI,
    }
}

console.log(calculoCirculo(3))

console.groupEnd('Circulo')