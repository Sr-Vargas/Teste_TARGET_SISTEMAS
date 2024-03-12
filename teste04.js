function descobrirInterruptores() {
    // Simula a primeira visita à sala das lâmpadas
    // Liga o primeiro interruptor e desliga os outros dois
    let l1 = ligarPrimeiroInterruptor();
    let l2 = desligarSegundoInterruptor();
    let l3 = desligarTerceiroInterruptor();
    
    // Verifica o estado das lâmpadas após a primeira visita
    if (l1) {
        console.log("O primeiro interruptor controla a lâmpada 1.");
        console.log("O segundo interruptor controla a lâmpada 2.");
        console.log("O terceiro interruptor controla a lâmpada 3.");
    } else if (l2) {
        console.log("O segundo interruptor controla a lâmpada 1.");
        console.log("O primeiro interruptor controla a lâmpada 2.");
        console.log("O terceiro interruptor controla a lâmpada 3.");
    } else {
        console.log("O terceiro interruptor controla a lâmpada 1.");
        console.log("O segundo interruptor controla a lâmpada 2.");
        console.log("O primeiro interruptor controla a lâmpada 3.");
    }
}

// Funções para simular a ligação e desligação dos interruptores
function ligarPrimeiroInterruptor() {
    return true; // Lâmpada ligada
}

function desligarSegundoInterruptor() {
    return false; // Lâmpada desligada e fria
}

function desligarTerceiroInterruptor() {
    return false; // Lâmpada desligada e fria
}

// Chamada da função para descobrir os interruptores
descobrirInterruptores();

/* Obs.: Esse teste também pode ser feito com apenas uma ida à sala.
Ex.: Liga o primeiro interruptor e deixa ligado por alguns minutos (sufiente para esquentar uma lâmpada).
Após isso, desliga o primeiro e liga o segundo interruptor.
Deixe o segundo ligado e vá até a sala.
Na sala, uma lâmpada estará acessa (segundo interruptor).
Outra lâmpada estará apaga porém quente, encoste a mão na lâmpada, se ela estiver quente, então, será referente ao primeiro interruptor.
A outra que estará apagada e fria será do terceiro interruptor. */