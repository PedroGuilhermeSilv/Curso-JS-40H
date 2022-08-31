function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    var txtres = document.querySelector('p#txtres')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if(radsex[0].checked){
            genero = 'Homem'
            if(idade >0 && idade <=10){
                img.setAttribute('src', 'img/criancaH.jpg')
                //cirnaça
            }else if(idade<21){
                img.setAttribute('src', 'img/jovemH.jpg')
                //jovem
            }else if(idade <50){
                img.setAttribute('src', 'img/adultoH.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'img/idosoH.jpg')
                //idoso
            }
            
        }else {
            genero = 'Mulher'
            if(idade >0 && idade <=10){
                img.setAttribute('src', 'img/criancaM.jpg')
                //cirnaça
            }else if(idade<21){
                img.setAttribute('src', 'img/jovemM.jpg')
                //jovem
            }else if(idade <50){
                img.setAttribute('src', 'img/adultoM.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'img/idosoM.jpg')
                //idoso
            }
            
        }
        res.style.textAlign = 'center'
        txtres.innerHTML= `Você é ${genero}.`
        res.appendChild(img)
        
    }
}