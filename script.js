
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


const spanSurname=document.querySelector(".surname-container >span");
const inputSurname=document.getElementById("surname");
inputSurname.addEventListener("input", (e)=>{
const input2=e.target.value;
if(input2.length<3 || input2.length>20){
    spanSurname.innerHTML='le prenom doit avoir entre 2 et 20 caractères';
    inputSurname.classList.add("error-name");
}else if(symbols.test(input2)){
    spanSurname='le prenom ne doit pas avoir de caractères spéciaux';
    inputSurname.classList.add("error-name");
}else{
    spanSurname.innerHTML="";
    inputSurname.classList.remove("error-name");
}


});

