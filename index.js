

function clear_input_text(){
    let numero_1 =  document.getElementById("numero1").value = ""
    let numero_2 =  document.getElementById("numero2").value = ""

}

function fazer_conta_de_somar(){

    let numero_1 =  document.getElementById("numero1").valueAsNumber;
    let numero_2 =  document.getElementById("numero2").valueAsNumber;

    

    let total = numero_1 + numero_2;

    if(isNaN(total)){
        window.alert("inválido!")
        clear_input_text()
        return
    }

    let numeroParaAparecerNaTela = document.createElement("div");
    numeroParaAparecerNaTela.classList.add("div-numero");
    numeroParaAparecerNaTela.append(total)
    document.body.appendChild(numeroParaAparecerNaTela);
    clear_input_text()
}
