/*nome.value 
string > nome.value.split('').lenght >2     >>Validação para nome completo<<

document.getElementById('botao id') disable=true    >>Desabilitar botão<<

>>Condição para botão funcionar<<
document.getElementById('id do botão').disable = nome.value.split('').lenght >2

function validaNome(nomecompleto){
    const nomeComoArray = nomeCompleto.split(''),
    return nomeComoArray.length>=2;            >>Função criada para validar se o cliente informar apenas o primeiro nome<<
}
*/ 

const form = document.getElementById('forms');

form.addEventListener(`submit`, function(e){
    e.preventDefault(); 
    
    const campoA = document.getElementById(`number1`);               
    const campoB = document.getElementById(`number2`);
    const imageSucess = document.getElementById(`image1`);
    const imageError = document.getElementById(`image2`);
    const imageSucess1 = document.getElementById(`image3`);
    const imageError1 = document.getElementById(`image4`);
    const mensagemSucesso = `Muito bem! O número ${campoA.value} é menor que o número ${campoB.value}`;
    const mensagemError = `Foi mal! O número ${campoA.value} é maior que o número ${campoB.value}`;
    
    
    if ( parseInt(campoA.value) < parseInt(campoB.value)) {
        
        const containerMensagemSucesso = document.querySelector(`.mensagem-sucess`);
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        imageSucess.style.display= `block`;
        imageError.style.display= `block`;
        containerMensagemSucesso.style.display=`block`;
        campoA.style.border = `1px solid rgb(10, 194, 4)`;
        campoB.style.border = `1px solid rgb(10, 194, 4)`;
        
        
        campoA.value=``;
        campoB.value=``;
        
    } else {
        const containerMensagemError = document.querySelector(`.mensagem-error`);
        containerMensagemError.innerHTML = mensagemError;
        imageSucess1.style.display= `block`;
        imageError1.style.display= `block`;
        containerMensagemError.style.display=`block`;
        campoA.style.border = `1px solid rgb(243, 29, 29)`;
        campoB.style.border = `1px solid rgb(243, 29, 29)`;
        
        
        campoA.value=``;
        campoB.value=``;
    }
    
    const btn= document.querySelector(`#refresh`)
    btn.addEventListener(`click`,() =>{
        location.reload();
    })

})
console.log(form);

