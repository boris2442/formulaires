// document.getElementById("name").addEventListener("input", function (){
//     const input=this.value;
//     console.log(input)
//     const message=document.getElementById("alertName")

//     if(input.length < 10 || input.length >20){
//         console.log("hey")
//         message.textContent='Le nom doit avoir entre 10 et 20 caractères.';
//         message.style.color='red';
//     }else{
//         message.textContent='Nombre de caractere:' + input.length;
//         message.style.color='red';
//     }
// })
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

