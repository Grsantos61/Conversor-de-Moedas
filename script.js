const convertButton = document.querySelector(".button-convert") // variavel p/ declarar botão
const currencySelect = document.querySelector(".currency-select") // variavel p/ declarar seletor

//função só é executada apos clique no botão 
function convertValues() {
    const inputValue = document.querySelector(".input-convert").value //variavel para guardar valor digitado no input
    const valueConvercao = document.querySelector(".value-convert") //valor inserido para conversão
    const valueConvertido = document.querySelector(".value-converted") //valor convertido

    const valueDolar = 5.69
    const valueEuro = 6.13
    const valueBit = 387540
    const valueLibra = 7.43

    // Se o select estiver selecionado o valor Dolar ele faz essa condição 
    if (currencySelect.value == "Dolar") {
        valueConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / valueDolar)
    }

    // Se o select estiver selecionado o valor Euro ele faz essa condição 
    if (currencySelect.value == "Euro") {
        valueConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / valueEuro)
    }

    // Se o select estiver selecionado o valor Bitcoin ele faz essa condição 
    if (currencySelect.value == "Bitcoin") {
        valueConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / valueBit);
    }

    // Se o select estiver selecionado o valor Libra ele faz essa condição 
    if (currencySelect.value == "Libra") {
        valueConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / valueLibra);
    }

    valueConvercao.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

//Função para mudar bandeira e nome da moeda e caso input estiver preenchido ja faz conversão
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("img-convert")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './img/estados-unidos.png'
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './img/euro.png'
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './img/bitcoin.png'
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './img/libra.png'
    }

    convertValues() 
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)