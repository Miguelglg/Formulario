const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const idadeInput = document.querySelector("#idade");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // evento que verifica se a lacuna foi preenchida//
    if(nameInput.value=== ""){
        alert("Preencha '' Nome Completo ''");
        return;
    }

    // verificar se a idade foi preenchida

    if(idadeInput.value=== ""){
        alert("Preencha '' Idade''");
        return;
    }

    //verificar numero de contato 

   if(!validateNumber(numberInput.value, 10)){
    alert(" '' Preencha seu contato com o DDD ''")
    return;
   }


    // verificar se o email esta preenchido e é valido//

    if(emailInput.value=== "" || !isEmailValid(emailInput.value) ){
        alert(" Preencha '' E-mail '' ");
        return;
    }

    //verificando se a senha é valida 

    if(!validatePassword(passwordInput.value, 6)){
        alert(" A senha deve ter no minímo 6 caracteres");
        return;
    }


    // verifica a ação selecionada 

    if(jobSelect.value === "") {
        alert("selecione uma opção");
        return;
    }

    // validção de mensagem 
    if(messageTextarea.value === "") {
        alert(" Porfavor deixe seu feedback ");
        return;
    }

    

    form.submit();
});

    // função que valida o email //

    function isEmailValid(email){

        //regex para validar email
        const emailRegex = new RegExp(
            // letras em caixa alta e baixa numeros simbolos  autorizados no email
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );
        if (emailRegex.test(email)){
            return true;
        }

        return false;
    }

    // função que valida senha

    function validatePassword(password , minDigts){
        if (password.length >= minDigts){
            return true  
         }
         return false
}

    // função que valida o numero de contato  

    function validateNumber( number, minDigts){
        if(number.length >= minDigts){
            return true
        }
        return false 
    }


    