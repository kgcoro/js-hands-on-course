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
    const listOrd = ordenarLista(list);
    if (esParImpar(listOrd)) {
        const indexList = Math.floor(listOrd.length / 2);
        const medianaImpar = listOrd[indexList];
        return medianaImpar
    } else {
        const indexListOne = Math.floor(listOrd.length / 2);
        const indexListTwo = indexListOne - 1;
        const medianaPar = calculoPromedio([listOrd[indexListOne], listOrd[indexListTwo]]);
        return medianaPar;
    }
}

function ordenarLista(list) {
    const listOrdenada = list.sort((valAcumulado, valActual) => valAcumulado - valActual);
    return listOrdenada;
} 