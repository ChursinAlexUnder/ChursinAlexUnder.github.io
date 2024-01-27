const fileName = "Test"
// const resultElement = document.getElementById("result")
// let p1 = "Hello!"
// alert(p1)
// console.log("Test:", p1, 123)
// console.log(1 + 123)
// resultElement.textContent = "И тебе привет!!!"
// console.log(resultElement.textContent)
// console.log(typeof sumKoef)

// 

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const resultElement = document.getElementById("result")

button1.onclick = function () {
    const sumKoef = Number(input1.value) + Number(input2.value) + Number(input3.value)
    resultElement.textContent = "Сумма коэффициентов: " + sumKoef
}
button2.onclick = function () {
    const a = Number(input1.value)
    const b = Number(input2.value)
    let discrim = Math.pow(b, 2) - 4 * a * Number(input3.value)
    if (discrim < 0)
    {
        resultElement.textContent = "С комплексными корнями не работаем!"
    }
    else
    {
        let x1 = (-b + Math.sqrt(discrim)) / (2 * a)
        let x2 = (-b - Math.sqrt(discrim)) / (2 * a)
        resultElement.textContent = "Корни: " + x1 + " и " + x2
    }
}


