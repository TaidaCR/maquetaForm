const button = document.getElementById('enviar');

document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener('click', send);
});

function send(){
    const formContainer=document.querySelector('.form-container');
    const inputs = formContainer.querySelectorAll('input[type="text"], input[type="tel"], textarea');
    
    let isNotEmpty= true;
    let emptyFields=[];

    inputs.forEach(input => {
        if (input.value.trim() === ""){
            emptyFields.push(input.placeholder)
            isNotEmpty=false;
        } 
    });
        
    if (emptyFields.length===1){
        alert(`El campo ${emptyFields} no puede estar vacío.`);
    } else if (emptyFields.length>1) {
        alert(`Los campos ${emptyFields.join(", ")} no pueden estar vacíos.`);
    }

    if (isNotEmpty) {
        const sending = document.getElementById('sending');

        button.innerHTML = 'Enviando...';
        button.disabled = true;

        sending.style.display = 'flex'; 

        setTimeout(() => {
            alert('Formulario enviado.');
            sending.style.display = 'none';

            inputs.forEach(input => {
                input.value = "";
            });
            
            button.innerHTML = 'Enviar';
            button.disabled = false;
        }, 2000);
    }
}