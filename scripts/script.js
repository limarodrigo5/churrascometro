// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

const calcular = () => {
    console.log('calculando...')

let adultos = inputAdultos.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value; 

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} pet's de 2L de Bebidas</p>`

}

const carnePorPessoa = (duracao) => {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
    
}

const cervejaPorPessoa = (duracao) => {

    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
    
}

const bebidasPorPessoa = (duracao) => {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}