function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora =19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>=0 && hora <= 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#D4CAAF'
        //bom dia
    }else if(hora>12 && hora <=18){
        img.src = 'img/tarde.jpg'
        document.body.style.background ='#98836D'
        //boa tarde
    }else{
        document.body.style.background='#151115'
        img.src = 'img/noite.jpg'
        //boa noite
    }
}