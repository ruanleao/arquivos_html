const inputNome = document.querySelector("#nome");
const botao = document.querySelector("#mostrar");
const saida = document.querySelector("#saida");

botao.addEventListener("click", function()
{
    const nomeDigitado = inputNome.value.trim();

    if(nomeDigitado === "")
        {
            saida.textContent = "Por favor, digite um nome.";
            saida.style.color = "red";
        }
    else
        {
            saida.textContent = `Olá, ${nomeDigitado}!`;
            saida.style.color = "green";
        }
});