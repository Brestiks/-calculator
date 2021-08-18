let butAction = document.querySelectorAll('.button-action') //выполнить арифмитическое действие 
let butNumber = document.querySelectorAll('.button-number') //ввод цифр
let butEqually = document.querySelector('.button-equally') //присвоить мат. операцию
let butComma = document.querySelector('.button-comma') //точка
let butDelete = document.querySelector('.button-delete') //
let butOperations = document.querySelectorAll('.button-operationsNumber')
let butClear = document.querySelectorAll('.button-clear') //
let butNegative = document.querySelector('.button-negative') //

//очистка полей

for (let item of butClear) {
    item.addEventListener ('click', (e) => {
        let dataOperations = e.currentTarget.dataset.operation
        if (dataOperations == 'clearAll') {
            out.innerText = ''
            outOperations.innerText = ''
        } else if (dataOperations == 'clearLower') {
            out.innerText = ''
        }
    })
}

//запятая

butComma.addEventListener ('click',() => putComma(event,'click'))

//перевести число в отрицательное\положительное

//события операции 1/x x^2 √x 

for (let item of butOperations) {
    item.addEventListener('click', operationsSingelNumber)
}

//произвести операцию + - / *

butEqually.addEventListener ('click', eqaulli)

//событие ввода цифры
for (let item of butNumber) {
    item.addEventListener ('click', (e) => {
        valueNumber = e.target.innerText
        out.innerText += valueNumber
    })
}
//событие математической операции
for (let item of butAction) {
        item.addEventListener ('click', (e) => {
            let valueOut = out.innerText
            if (valueOut == ''){
                return
            }
            outOperations.innerText = valueOut
            out.innerText = ''
            mathAction = e.target.innerText
        })
    }
//стилизация активной кнопки действия
for (let item of butAction) {
    item.addEventListener ('click', (e) => {
        for (let item of butAction) {
            item.classList.remove('active')
        }
        e.currentTarget.classList.add ('active')
        console.log (e.currentTarget)
    })
}


//реализация ровно 

function eqaulli (key,typeEvent) {

    if (typeEvent == 'key'){
        if (!(key.key == 'Enter')){return}
    }
    if (outOperations.innerText == ''){
        outOperations.innerText += out.innerText 
        out.innerText = ''
        return
    }
    let valueOut = out.innerText //нижняя строка
    let valueCur = outOperations.innerText //верхняя строка
    console.log(out)
    console.log(`niz - ${valueOut} vverh - ${valueCur}`)
    let result
    outOperations.innerText = ''
    switch (mathAction) {
        case '+':
            result = (+valueCur) + (+valueOut)
            outOperations.innerText = ``
            out.innerText = result
            break;
        case '-':
            result = (+valueCur) - (+valueOut)
            outOperations.innerText = ``
            out.innerText = result
            break;
        case 'x':
            result = (+valueCur) * (+valueOut)
            outOperations.innerText = ``
            out.innerText = result
            break;
        case '÷':
            result = (+valueCur) / (+valueOut)
            outOperations.innerText = ``
            out.innerText = result
            break;    
        default:
            break;
    }
    console.log (`${valueOut} зук ${mathAction} зук ${valueCur}`)
} 

//реализация корня, квадрата и деления на Х

function operationsSingelNumber (e) {
    let dataOperations = e.currentTarget.dataset.operation
    console.log(dataOperations)
    switch(dataOperations) {
        case 'division':
            out.innerText = 1 / +(out.innerText)
            break
        case 'square':
            out.innerText = +(out.innerText) * +(out.innerText)
            break;
        case 'root':
            out.innerText = Math.sqrt(+(out.innerText))
            break;        
        default:
            break    
    }
}