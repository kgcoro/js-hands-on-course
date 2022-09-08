console.log(salarios);

// Análisis por persona
function buscarPersona(nombrePersona) {
    return salarios.find((persona) => persona.name == nombrePersona);
}

function medianaPersona(namePeople) {
    const trabajos = buscarPersona(namePeople).trabajos;

    const salarios = trabajos.map((elemento) => elemento.salario);

    const medianaSalarios = PlatziMath.mediana(salarios)

    return medianaSalarios;
}

function proyeccionSalarial(namePeople) {
    const trabajos = buscarPersona(namePeople).trabajos;

    let porcentajesCrecimiento = []

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaCrecimiento = PlatziMath.mediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const nuevoSalario = ultimoSalario + (ultimoSalario * medianaCrecimiento);

    return nuevoSalario;
}

// Análisis por empresa
const empresas = {};

for (person of salarios) {
    for (trabajo of person.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log({ empresas });

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return;
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salsarios ese año');
    } else {
        return PlatziMath.mediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => medianaEmpresaYear(nombre, year));

        let porcentajesCrecimiento = []

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaCrecimiento = PlatziMath.mediana(porcentajesCrecimiento);

        const ultimaMedianaSalario = listaMedianaYears[listaMedianaYears.length - 1];
        const nuevaMedianaSalario = ultimaMedianaSalario + (ultimaMedianaSalario * medianaCrecimiento);

        return nuevaMedianaSalario;
    }
}

// Análisis General
function medianaGeneral() {
    const listaMedianas = salarios.map((persona) => medianaPersona(persona.name));

    const mediana = PlatziMath.mediana(listaMedianas)

    return mediana;
}

function medianaTopTen() {
    const listaMedianas = salarios.map((persona) => medianaPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);    

    const medianaTopTen = PlatziMath.mediana(top10);

    return medianaTopTen;
}