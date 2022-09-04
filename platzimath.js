function calculoPromedio(list) {
    const sumList = list.reduce(
        (valorPrevio, valorActual) => valorPrevio + valorActual
    );

    const promedio = sumList / list.length;
    console.log(promedio);
    return promedio;
}

function esParImpar(list) {
    if (list.length % 2)
        return true; // impar
    else
        return false; // par
}

function mediana(list) {
    if (esParImpar(list)) {
        const indexList = Math.floor(list.length / 2);
        const medianaImpar = list[indexList];
        console.log({
            indexList,
            medianaImpar
        });
        return medianaImpar
    } else {
        const indexListOne = Math.floor(list.length / 2);
        const indexListTwo = indexListOne - 1;
        const medianaPar = calculoPromedio([list[indexListOne], list[indexListTwo]]);
        console.log({
            indexListOne,
            indexListTwo
        })
        return medianaPar;
    }
}