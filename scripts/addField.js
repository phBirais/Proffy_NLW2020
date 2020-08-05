//procurar botao pelo id
document.querySelector("#add-time") 

//procura pelo evento click
//quando clicar no botao executar uma ação
.addEventListener('click', cloneField)


//executar uma ação
function cloneField() {
    //encontra o campo que quer duplicar
    //duplica o campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
    //achar os campos dentro do container para limpar
    const fields = newFieldContainer.querySelectorAll('input')

     //para cada campo 
    fields.forEach(function (field) {
        //limpar os campos
        field.value=""    
    })    

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
