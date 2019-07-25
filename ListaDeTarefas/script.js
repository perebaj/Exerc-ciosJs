var myInput = document.getElementById('myInput')
var myUL = document.getElementById('myUL')
var addBtn = document.getElementById('addBtn')
var list = document.querySelector('ul');
addBtn.addEventListener('click', newElement)
list.addEventListener('click', check);
var close = document.getElementsByClassName('close')

/*
@BRIEF      ADICIONA UM NOME ELEMENTO NA LISTA DE TAREFAS
*/
function newElement() {
    let input = myInput.value
    if (input === "") // Verificação da task
        alert('Adicione uma task')
    else {
        //Criação de um elemento DOM com um nó de text
        var li = document.createElement('li') // cria um elemento html do tipo li (list items)
        let aux = document.createTextNode(input) // variavel auxiliar que 
        li.appendChild(aux)
        myUL.appendChild(li)
    }

    myInput.value = '' //LIMPA O VALOR DO INPUT
    myInput.focus() //FOCA O CURSOR DO MOUSE NO LOCAL DE INPUT
    
    closeBtn(li)
    excludeTask()

    
}
/*
Ao clicar na caixa de span excluir, a tarefa é excluida
*/
function excludeTask(){
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            this.parentElement.style.display = 'none'
        }
    }
}
/*
@BRIEF  -   cria o botão de excluir para cada elemento da lista
*/
function closeBtn(li){
    let span = document.createElement('span')
    span.className = 'close'
    let txt = document.createTextNode('Excluir')
    span.appendChild(txt)
    li.appendChild(span)
}

function check(ev) {
    if (ev.target.tagName === 'LI')
        ev.target.classList.toggle('checked')
}




