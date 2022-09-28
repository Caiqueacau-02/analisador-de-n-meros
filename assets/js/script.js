//Variáveis 
let number = document.getElementById('num')
let selLista = document.getElementById('selAnalisador')
let resultado = document.getElementById('res')
let valores = []

//Botões
let adicionar = document.querySelector(".adicionar")
let limpar = document.querySelector(".limpar")
let finalizar = document.querySelector(".finalizar")
let apagar = document.querySelector(".apagar")

adicionar.addEventListener("click",  function adicionar(){
    if(number.value.length == 0 || Number(number.value) > 100 ){
        alert('Valor inválido')
    }
        else{
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `${number.value}`
        selLista.appendChild(item)
        resultado.innerHTML = ''
    }
 number.value = ''

})

apagar.addEventListener("click", function apagar(){
    document.querySelector('option').remove()
    valores.pop(Number(number.value)) 
})

document.addEventListener("keypress", function(e){
        if(valores.indexOf(Number(number.value)) != -1){
            alert('Valor já encontrado')
        }else if(Number(number.value) > 100 ){
            alert('Valor inválido')
        }else if(e.which == 13){
            valores.push(Number(number.value))
            let item = document.createElement('option')
            item.text = `${number.value}`
            selLista.appendChild(item)
            resultado.innerHTML = ''
        }
    })


limpar.addEventListener("click", function limpar(){
    resultado.innerHTML = ""
    valores = []
    selLista.innerHTML = ""
})

finalizar.addEventListener("click", function finalizar(){
    if(valores.length == 0){
        alert('Adicione um valor antes de finalizar!')
    }else{
        resultado.innerHTML += `<p> Ao todo, temos ${valores.length} números</p>`

        let maior = Math.max.apply(null, valores)
        resultado.innerHTML += `<p>O maior número adicionado é ${maior}</p>`

        let menor = Math.min.apply(null, valores)
        resultado.innerHTML += `O menor número adicionado é ${menor}`

        let total = 0
        for(let i = 0; i <valores.length; i++){
            total += valores[i]
        }
        resultado.innerHTML += `<p>Somando todos os valores temos ${total}</p>`
        
        let media = 0
        media = total / valores.length
        resultado.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
})

