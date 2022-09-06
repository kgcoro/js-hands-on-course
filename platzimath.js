const PlatziMath = {};

PlatziMath.esParImpar = function esParImpar(list) {
    if (list.length % 2)
        return true; // impar
    else
        return false; // par
}

PlatziMath.calculoModa = function calculoModa(list) {
    const listCount = {};

    for (const element of list) {
        listCount[element] ? listCount[element] += 1 : listCount[element] = 1;
    }

    const numMayor = Math.max(...Object.values(listCount))

    for (const key in listCount) {
        if (listCount[key] == numMayor)
            return `La moda es: ${key} porqué se repite ${numMayor} veces`
    }
}

PlatziMath.calculoPromedio = function calculoPromedio(list) {
    const sumList = list.reduce(
        (valorPrevio, valorActual) => valorPrevio + valorActual
    );

    const promedio = sumList / list.length;
    console.log(promedio);
    return promedio;
}

PlatziMath.mediana = function mediana(list) {
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

PlatziMath.ordenarLista = function ordenarLista(list) {
    const listOrdenada = list.sort((valAcumulado, valActual) => valAcumulado - valActual);
    return listOrdenada;
} 