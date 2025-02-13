window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
};

const spanName=document.querySelector(".name-container > span")
const symbols = /[^a-zA-Z0-9\s]/;
console.log(symbols)
const inputName = document.getElementById("name");
inputName.addEventListener("input", (e)=>{
    const input=e.target.value;
    
    if(input.length > 20 || input.length < 3 ){
        spanName.innerHTML='le nom doit avoir entre 2 et 20 caractères' 
        inputName.classList.add("error-name")
       
    }else if( symbols.test(input)){
     spanName.innerHTML='le nom ne doit pas avoir de caractères spéciaux';
     inputName.classList.add("error-name");
    }else{
       spanName.innerHTML="";
        inputName.classList.remove("error-name");  
      }
       
});


const spanUsername=document.querySelector(".prenom-container >span");
const inputUsername=document.getElementById("surname");
inputUsername.addEventListener("input", (e)=>{
const input2=e.target.value;
if(input2.length<3 || input2.length>20){
    spanUsername.innerHTML='le prenom doit avoir entre 3 et 20 caractères';
    inputUsername.classList.add("error-name");
}else if(symbols.test(input2)){
    spanUsername.innerHTML='le prenom ne doit pas avoir de caractères spéciaux';
    inputUsername.classList.add("error-name");
}else{
    spanUsername.innerHTML="";
    inputUsername.classList.remove("error-name");
}


});


const spanMessage=document.querySelector(".message-container > span");
const message=document.getElementById("message");

message.addEventListener("input", (e)=>{
    const textareaText = e.target.value;

    if(textareaText.length <10 || textareaText > 70){
        spanMessage.innerHTML="le message doit avoir entre 10 et 70 caracteres" ;
        message.classList.add("error-name");
    }else{
        spanMessage.innerHTML="" ;
        message.classList.remove("error-name");
    }
});
const forms=document.querySelector("#dynamicForm")
// const  submits=document.getElementById("soumettre");
forms.addEventListener("submit", (e)=>{

e.preventDefault(); // Empêche le rechargement de la page
alert('Formulaire soumis avec succès !');
})

