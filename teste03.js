function proximoElementoSequenciaA() {
    // Sequência a) 1, 3, 5, 7, ___
    return 7 + 2;
}

function proximoElementoSequenciaB() {
    // Sequência b) 2, 4, 8, 16, 32, 64, ____
    return 64 * 2;
}

function proximoElementoSequenciaC() {
    // Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
    return 36 + 13;
}

function proximoElementoSequenciaD() {
    // Sequência d) 4, 16, 36, 64, ____
    return 8 * 8;
}

function proximoElementoSequenciaE() {
    // Sequência e) 1, 1, 2, 3, 5, 8, ____
    return 8 + 5;
}

function proximoElementoSequenciaF() {
    // Sequência f) 2, 10, 12, 16, 17, 18, 19, ____
    return 19 + 1;
}

// Teste das funções
console.log("Sequência a): " + proximoElementoSequenciaA());
console.log("Sequência b): " + proximoElementoSequenciaB());
console.log("Sequência c): " + proximoElementoSequenciaC());
console.log("Sequência d): " + proximoElementoSequenciaD());
console.log("Sequência e): " + proximoElementoSequenciaE());
console.log("Sequência f): " + proximoElementoSequenciaF());

// Abra o terminal teste003 e execute o programa para verificar os resultados: node teste03.js