function calculoPromedio(list) {
    const sumList = list.reduce(
        (valorPrevio, valorActual) => valorPrevio + valorActual
    );

    const promedio = sumList / list.length;
    console.log(promedio);
}
