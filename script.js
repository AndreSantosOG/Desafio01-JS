
alert("Seja Bem-Vindo a Calculadora automática")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos dois números é:  ${sum}`)
alert(`A subtração dos dois números é:  ${sub}`)
alert(`A multipliacação dos dois números é:  ${mult}`)
alert(`A divisão dos dois números é:  ${div}`)
alert(`O resto da divisão dos dois números é:  ${restDiv}`)

const even = sum % 2

if(even != 0) {
    alert(`A soma dos dois números é impar: ${sum}`)
}else {
    alert(`a soma dos dois números é par: ${sum}`)
 }

const different = numberOne != numberTwo

if(different) {
    alert("Os dois números inseridos são diferentes")
}else {
    alert("Os dois números inseridos são iguais")
}


