
/* Acessar o DOM

Case Sensitive = reconhece letras maiuscula e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe:  getElementsByClassName()
por Seletor: queryselector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOff('@') == -1 || email.value.indexOff('.') == -1){
       txtEmail.innerHTML = 'E-mail Inválido!'
       txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = 'green'
    }
}