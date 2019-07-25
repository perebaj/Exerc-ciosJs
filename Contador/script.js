var start = document.querySelector('input#start')
var end = document.querySelector('input#end')
var step = document.querySelector('input#step')
var clickButton = document.querySelector('#clickButton')
clickButton.addEventListener('click',displayDialog)


function displayDialog(){
    let start_ = Number(start.value)
    let end_ = Number(end.value)
    let step_ = Number(step.value)

    if(validation(step_,start_,end_) == false){
        window.alert("Valores Inválidos")
    }   
    else{
        if(start_ > end_){
            for(let count = start_; count >= end_; count-=step_)
                console.log(count)
        }
        else{
            for(let count = start_; count  <= end_; count+=step_)
                console.log(count)
        }
    }

    
}

function validation(step_, start_, end_){
    if(start_ === end_ || step_ == 0 || step_ == null || start_ == null || end_ == null)
        return false
    else
        return true
    
}

