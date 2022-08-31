var numeros=[]
var adicionado = document.querySelector('textarea#restxt')
var resultado = document.querySelector('p#res')

function carregar(){


var numDig = document.querySelector('input#numero')
var numDigInt = Number(numDig.value)

if(numeros.indexOf(numDigInt)!= -1 || numDigInt>100 || numDig.value.length ==0){
    window.alert('[ERRO] tente outro numero}')
} else{
    numeros.push(numDigInt)
    adicionado.innerHTML = adicionado.value +`\n Valor ${numDigInt} adicionado`
    resultado.innerHTML = ''
}

}
function finalizar(){
    resultado.innerHTML = ` Ao todo, temos ${numeros.length} números cadastrados<br> 
    O maior valor informado foi ${maiorValor()}<br>
    O menor valor encontrado foi ${menorValor()}<br>
    A soma dos valores é ${soma()}
    A média dos valores é ${media()} `
}
function maiorValor(){
    var max = numeros.reduce(function(a, b) {
        return Math.max(a, b);
      })
    return max;
}
function menorValor(){
    var min = numeros.reduce(function(a, b) {
        return Math.min(a, b);
      })
    return min;
}
function soma(){
    var soma =0
    for (let index = 0; index < numeros.length; index++) {
        soma += numeros[index]
        
    }
    return soma
}

function media(){
    var media =soma()/numeros.length
    return media
}