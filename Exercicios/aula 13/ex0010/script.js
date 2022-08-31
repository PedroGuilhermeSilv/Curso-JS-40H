function conta(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('p#restxt')
    inicioInt = Number(inicio.value)
    fimInt = Number(fim.value)
    passoInt = Number(passo.value)
    if(inicio.value.length==0 || inicio>fim || passoInt == 0){
        res.innerHTML =' Impossivel calcular'
        
    }else if(passo.value.length ==0 || passo == 0){
        window.alert('ERRO Iremos considerar o passo = 1.')
        var resultado =''
        passoInt=1
        while(inicioInt<fimInt){
            resultado += `${inicioInt} <span>&#128073; </span>`
            inicioInt+= passoInt
            
        }
        res.innerHTML= resultado
            
    }else{
        var resultado =''
        while(inicioInt<fimInt){
            resultado += `${inicioInt} <span>&#128073; </span> `
            inicioInt+= passoInt       
        }
        res.innerHTML= resultado 
    }

}
