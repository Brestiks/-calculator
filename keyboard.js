document.addEventListener ('keyup', numbers) //событие ввода цифр
document.addEventListener ('keyup', deleteNumbers) //событие удаление цифр
document.addEventListener ('keyup', () => putComma(event,'key')) //событие ввод точки
//document.addEventListener ('keypress', () => butEqually.addEventListener ('click', eqaulli))
let out = document.querySelector('.out-current') //ввод цифр
let outOperations = document.querySelector('.out-operation') //операция над цифрами (вверхня строка)
let mathAction = outOperations.dataset.event //дата атрибут с типом действия
let onlyNumberReg = /^\d+$/ //регулярное выражение на цифры
let commaReg = /[.]+/g //регулярно выражение на точку

//ввод точки 
function putComma (event, typeEvent) {
    let comma
    if (typeEvent == 'key'){
        comma = event.key 
        console.log(`${comma} v knopka`)      
    } else if (typeEvent == 'click'){
        comma = event.target.innerText
        console.log(`${comma} v click`)
    } 
    if (!(comma == '.')){return}
    if (!(commaReg.test(out.innerText))){
        if (out.innerText == ''){
            return
        }else if (!(out.innerText == '') && !(commaReg.test(out.innerText))){
            out.innerText += comma
        }
    }  
}

//ввод цифр
function numbers(key) {
    let str = key.key
    if (onlyNumberReg.test(str)) {
        out.innerText += str
    }
    console.log(key)
}
// удаление 
function deleteNumbers(key) {
    if(key.code === 'Backspace'){
        out.innerText = out.innerText.slice(0, -1)
    }
} 


