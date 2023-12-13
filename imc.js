function imc(){
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)

    const imc = (peso/(altura*altura)).toFixed(1)

    document.getElementById('pp').innerHTML = imc + '   ' +  saude(imc)
    document.getElementById('pp').style.backgroundColor = '#002609'   
}
function saude(imc){
    if(imc < 18.5)
        return 'Magreza'
    if(imc>=18.5 && imc <= 24.9 )
        return 'Normal'
    if(imc>=25 && imc <= 29.9)
        return 'Sobrepeso 1'
    if(imc >=30 && imc<= 39.9)
        return'Obesidade 2'
    if(imc>=40)
    return'Obsidade grave'
}
