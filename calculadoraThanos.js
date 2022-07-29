
// Thanos está vindo para Terra, para não serem pegos
// desprevinidos, os Vingadores, precisam de um programa que
// leia o número de dias que a nave dele irá passar pela atmosfera
// da Terra. Sendo assim, no momento em que tiverem a previsão de 
// dias da sua chegada, eles precisam saber o tempo em Ano, Mês e Dia 
// para evitar que Thanos dizime metade da população.
// Considerando que o ano tem 360 dias e cada mês 30 dias. 




const dataEstimada = chegadaThanos(391);

console.log(dataEstimada);
let diasRestantes  = dias/30 * 30 -dias;
function chegadaThanos(dias){
    
    const mesValor = 30;
    let qtdeMeses = Math.floor(dias/mesValor);
    let diasRestantes  = (qtdeMeses* mesValor) - (dias);

    const anoValor = 360;
    let qtdeAnos = Math.floor(dias/anoValor);
    let mesesRestantes = (((qtdeAnos) * (anoValor)) - (dias)) / (mesValor);
        
           

    if (typeof dias !== 'number')
        return 'Não é um número !';
    if (dias < mesValor)
        return "A nave do Thanos irá passar na atmosfera em " + (dias) + ' dia(as)';
    if ((dias/ mesValor) < 12)
        return "A nave do Thanos irá passar na atmosfera em " + (qtdeMeses) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
    else (dias > anoValor)
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(dias/ anoValor) + ' ano(os)' + Math.floor(mesesRestantes*-1) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
}




 



 
