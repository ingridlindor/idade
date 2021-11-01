function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <12){
                img.setAttribute('src','img/criancahomem.gif')
                //criança
            } else if (idade <21){
                img.setAttribute('src','img/jovemhomem.gif')
                //Jovem
            } else if(idade < 59){
                img.setAttribute('src','img/adultohomem.gif')
                //Adulto
            } else{
                img.setAttribute('src','img/idosohomem.gif')
                //Idose
            }
        } else{
            genero = 'Mulher'
            if(idade >= 0 && idade <12){
                img.setAttribute('src','img/criancamulher.gif')
                //criança
            } else if (idade <21){
                img.setAttribute('src','img/jovemmulher.gif')
                //Jovem
            } else if(idade < 59){
                img.setAttribute('src','img/adultamulher.gif')
                //Adulto
            } else{
                img.setAttribute('src','img/idosa.gif')
                //Idose
            }
            
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
        
      
      
    


}