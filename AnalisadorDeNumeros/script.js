var number = document.querySelector('input#number')
var clickButton = document.querySelector('button#clickButton')
var result = document.querySelector('select#result')
var finish = document.querySelector('button#finish')
var mainInfo = document.querySelector('div#mainInfo')
finish.addEventListener('click', finalizar)
clickButton.addEventListener('click', display)

var vetor = []

/*
@BRIEF  OPERAÇÕES QUE SERÃO EXECUTADAS QUANDO O ELEMENTO FINISH(BOTÃO FINALIZAR), FOR CLICADO. DANDO MEDIDAS RESUMO DOS DADOS ARMAZENADOS
*/
function finalizar(){
    if(vetor.length == 0) // VERIFICAÇÃO
        alert("Antes de finalizar voce deve inserir elementos")
    else{
        var dados = {
            small: 0,
            big: 0,
            total: vetor.length,
        }
       
        bigSmall(dados)
        mainInfo.innerHTML = ""
        mainInfo.innerHTML = `O total de número inseridos é ${dados.total}`
        mainInfo.innerHTML += `<br>O maior valor digitado é ${dados.big} e menor ${dados.small}`

    }
}

/*
@BRIEF      VERIFICA QUAIS SÃO O MAIOR E MENOR ELEMENTOS DO VETOR(vetor[],, variavel global)
@param      {big}   maior valor
@param      {small} menor valor
*/
function bigSmall(dados){
    dados.small = vetor[0]
    dados.big = vetor[0]

    for(let count in vetor){
        if(vetor[count] < dados.small)
            dados.small = vetor[count]
        if(vetor[count] > dados.big)
            dados.big = vetor[count]
    }
    console.log(dados.small, dados.big)


}

function display(){
    let number1 = Number(number.value)
    if(!validNumber(number1) || onTheList(number1, vetor)) // Caso o número inserido nao seja válido
        alert("Número Iválido. Não é possivel adicionar valores mais de uma vez ou valores fora do escopo determinado")
    else{// número válido
        vetor.push(number1)
        console.log(vetor);
        let items = document.createElement('option')
        items.text = `Valor ${number1} adicionado`
        result.appendChild(items)
        mainInfo.innerHTML = ""
        
    }
    number.value = ""
    number.focus()
    
}

/*
@BRIEF  Verifica se o número é válido
@Return     True -  Caso seja válido
            False -  Caso seja inválido
*/
function validNumber(number){
    if(number >= 1 && number <= 100)
        return true
    return false
}


/*
@BRIEF: Verifica se o número digitado esta presente ou nao no vetor
@Return:    True - Número está na lista
            False - Número não esta na lista


*/
function onTheList(number, lista){
   if(lista.indexOf(number) != -1) // indexOf retorna -1 se o numero nao está presente no vetor
        return true
    return false

}

