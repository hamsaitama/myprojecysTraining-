/*
Thanos está vindo para Terra, para não serem pegos
desprevinidos, os Vingadores, precisam de um programa que
leia o número de dias que a nave dele irá passar pela atmosfera
da Terra. Sendo assim, no momento em que tiverem a previsão de 
dias da sua chegada, eles precisam saber o tempo em Ano, Mês e Dia 
para evitar que Thanos dizime metade da população.
Considerando que o ano tem 360 dias e cada mês 30 dias. 

valores de entrada ( 395 e 130) 
*/

const dataEstimada = chegadaThanos(1958);

console.log(dataEstimada);
let diasRestantes  = entrada/30 * 30 -entrada;
function chegadaThanos(entrada){
    
    const mesValor = 30;
    let qtdeMeses = Math.floor(entrada/mesValor);
    let diasRestantes  = (qtdeMeses* mesValor) - (entrada);
    
    

    if (typeof entrada !== 'number')
        return 'Não é um número !';
    if (entrada < 30)
        return "A nave do Thanos irá passar na atmosfera em " + (entrada) + ' dia(as)';
    if ((entrada/ 30) < 12)
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(entrada/30) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
    else (entrada > 360)
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(entrada/ 360) + ' ano(os)' + Math.floor((entrada-360)/30) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
}




 