// Thanos está vindo para Terra, para não serem pegos
// desprevinidos, os Vingadores, precisam de um programa que
// leia o número de dias que a nave dele irá passar pela atmosfera
// da Terra. Sendo assim, no momento em que tiverem a previsão de 
// dias da sua chegada, eles precisam saber o tempo em Ano, Mês e Dia 
// para evitar que Thanos dizime metade da população.
// Considerando que o ano tem 360 dias e cada mês 30 dias. 




const dataEstimada = chegadaThanos(0);

    

console.log(dataEstimada);

function chegadaThanos(dias){

    const mesValor = 30;
    const anoValor = 360;
    const qtdeMesesAno = 12;
    
    

        let qtdeMeses = Math.floor(dias/mesValor);
        let diasRestantes  = (qtdeMeses* mesValor) - (dias);

    
        let qtdeAnos = Math.floor(dias/anoValor);
        let mesesRestantes = ((qtdeAnos* anoValor) - dias) / (mesValor);

    
        
           

    if (typeof dias !== 'number'){
        return 'Não é um número !';
    }if (dias < 0) {
        return "Infelizmente o 'Equilibrio' já foi estabelecido e metade da população mundial desapareceu.";
    
    }if (dias == 0){
        return "Fuja ! O Thanos irá chegar a qualquer momento !"
    
    }if (dias < mesValor){
        return "A nave do Thanos irá passar na atmosfera em " + (dias) + ' dia(as)';

    }if ((dias/mesValor) < (qtdeMesesAno) && (diasRestantes == 0)) {
        return "A nave do Thanos irá passar na atmosfera em " + (qtdeMeses) + " mês(es) ";

    } else if  ((dias/ mesValor) < qtdeMesesAno) {
        return "A nave do Thanos irá passar na atmosfera em " + (qtdeMeses) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
    
    } else if  ((qtdeAnos >= 1) && (qtdeAnos* anoValor) - dias == 0)   {
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(dias/ anoValor) + ' ano(os)';

    } else if  ((qtdeAnos >= 1) && (qtdeMesesAno* qtdeAnos - qtdeMeses == 0)) {
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(dias/ anoValor) + ' ano(os) e ' + (diasRestantes*-1) + " dia(as) ";

    } else if  ((qtdeAnos >= 1) && (diasRestantes == 0) ) {  
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(dias/ anoValor) + ' ano(os) e ' + (mesesRestantes*-1) + " mês(es) ";

    } else
        return "A nave do Thanos irá passar na atmosfera em " + Math.floor(dias/ anoValor) + ' ano(os) e ' + Math.floor(mesesRestantes*-1) + " mês(es) e " + (diasRestantes*-1) + " dia(as) ";
}






 



 
