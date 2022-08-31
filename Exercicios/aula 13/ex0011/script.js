function tabuada(){
    var numero = document.querySelector('input#numero')
    var res = document.querySelector('textarea#restxt')
    numeroInt = Number(numero.value)
    if(numero.value.length==0 || numeroInt == 0){
        window.alert('Impossivel gerar tabuada')
        
    }else{
        var resultado =''
        for(var contador =0; contador <=10; contador++){
            var calculo = numeroInt*contador
            resultado += `${numeroInt} x ${contador} = ${calculo} \n`
        }
        res.innerHTML= resultado 
    }

}
