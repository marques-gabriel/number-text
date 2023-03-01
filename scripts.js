window.addEventListener('load', start)

function start() {

    console.log("It's running...")

    handleRange()
}

function preventFormSubmit(event) {
    const form = document.querySelector('form')
    form.addEventListener('submit', event.preventDefault())
}

const choiceNumber = document.querySelector("#choice")
const divNumber = document.querySelector("#number")
const divNumberWritten = document.querySelector("#written")

function writeOne(number) {

    const writtenNumbers = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"]

    return writtenNumbers[number]
}

function writeToNineteen(number) {
    const writtenNumbers = ["Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"]
    
    return writtenNumbers[number]

}

function writeDozens(number) {

    const writtenNumbers = ["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"]

    return writtenNumbers[number]

}

function writeHundreds(number) {

    
    const writtenNumbers = ["Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"]

    return writtenNumbers[number]

}

function setNumber(event) {

    preventFormSubmit(event)

    const number = choiceNumber.value
    divNumber.value = number    

    let written = "Cem"

    if (number <= 9) {
        written = writeOne(number)

    } else if( number <= 19) {
        written = writeToNineteen(number - 10)

    } else if(number < 100) {
        written = writeDozens(Math.floor(number / 10) - 2)

        if(number%10 != 0)
            written += ' e '+ writeOne(number % 10)

    } else if(number > 100) {

        written = writeHundreds(Math.floor(number / 100) -1)

        // Centena e unidade
        if(number % 100 < 10 && number % 100 != 0) {
            written += ' e ' + writeOne(number%10)

        } else if(number % 100 < 20 && number % 100 != 0) {

            written += ' e ' + writeToNineteen(Math.floor(number % 100) - 10)

        }  else if(number % 10 == 0 && number % 100 != 0) {

            written += ' e ' +  writeDozens((Math.floor(number % 100) / 10) - 2)

        } else if(number % 100 != 0) {

            written += ' e ' +  writeDozens(Math.floor(number % 100 / 10) - 2)
            written += ' e ' + writeOne(number%10)

        }


    }

    setWritten(written)

}

function setWritten(written) {

    divNumberWritten.value = written
}

function handleRange() {
    choiceNumber.addEventListener("input", setNumber)
}