let saldoInicial = parseInt(prompt('Digite aqui o seu saldo inicial!'))
let valorCompra = parseInt(prompt('Digite aqui o valor da sua compra!'))
let saldoAtual;

saldoAtual = saldoInicial - valorCompra;

calculadora(saldoInicial, valorCompra)

function calculadora(saldoInicial, valorCompra){
    
    if(saldoInicial > valorCompra){
        alert( 'A compra ocorreu corretamente!');
        alert(`Seu saldo atual é ${saldoAtual} R$`)
    }
    
    else if(saldoAtual < valorCompra){
        alert('Saldo insuficiente.')
    }
}





 




