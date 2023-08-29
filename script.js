const presentationContainer = document.querySelector(".presentation_container");
const converterContainer = document.querySelector(".converter_container")

setTimeout(() => {
    presentationContainer.style.opacity = `0`
    converterContainer.style.display = `flex`
    setTimeout(() => {
        converterContainer.style.scale = `1`
        converterContainer.style.opacity = `1`
    }, 250);
    setTimeout(() => {
        presentationContainer.style.display = `none`
    }, 1000);
}, 2000);

















const inputResult = document.querySelector(".input_result");
const result = document.querySelector(".result");
const selectMain = document.querySelector(".select_main");
const selectResult= document.querySelector(".select_result");

inputResult.addEventListener("keydown",()=>{
    setTimeout(() => {
        if (inputResult.value){
            verifyType(inputResult.value)
        }
        else{
            result.value = ''
            thermometerLine.style.height = `0px`
            changeBackground(0)
        }
    }, 1);
})

let res
let memorySave = [selectMain.value, selectResult.value]

const verifyType = (num) => {
    if(isNaN(num)){
        result.value = ''
    }
    else{
        if(selectMain.value == 1 && selectResult.value == 2){
            res = (parseInt(num) * 9/5) + 32
            result.value = res.toFixed(2)
            adjusThermometertLine(celsiusConverter(1,res)) 
        }
        else if(selectMain.value == 1 && selectResult.value == 3){   
            res = parseInt(num) + 273.15
            result.value = res.toFixed(2)
            adjusThermometertLine(celsiusConverter(2,res))
        }
        else if(selectMain.value == 2 && selectResult.value == 1){
            res = (parseInt(num) -32) * 5/9
            result.value = res.toFixed(2)
            adjusThermometertLine(res)
        }
        else if(selectMain.value == 3 && selectResult.value == 1){
            res = parseInt(num) - 273.15
            result.value = res.toFixed(2)
            adjusThermometertLine(res)
        }
        else if(selectMain.value == 2 && selectResult.value == 3){
            res = (parseInt(num) -32) * 5/9 + 273.15
            result.value = res.toFixed(2)
            adjusThermometertLine(celsiusConverter(3,res))
        }
        else if(selectMain.value == 3 && selectResult.value == 2){
            res = (parseInt(num) -273.15) * 9/5 + 32
            result.value = res.toFixed(2)
            adjusThermometertLine(celsiusConverter(4,res))
        }
    }
}

const celsiusConverter = (num,prevRes) => {
    if(num == 1 || num == 4){
        prevRes = (parseInt(prevRes) -32) * 5/9
        return prevRes
    }
    else if(num == 3 || num == 2){
        prevRes = parseInt(prevRes) - 273.15
        return prevRes
    }
}


// PARA HACER QUE EL SELECTOR CAMBIE Y ASI NO HAYA 2 IGUALES ( ANDA, NO PROBADO AÚN )


selectMain.addEventListener("change",()=>{
    if(selectMain.value == selectResult.value){
        selectMain.value = memorySave[1]
        selectResult.value = memorySave[0]
        memorySave = [selectMain.value, selectResult.value]
    }

    if(selectMain.value == 1 && selectResult.value == 2 || selectMain.value == 2 && selectResult.value == 1 ){
        changeThermometer(1)
    }
    else if(selectMain.value == 1 && selectResult.value == 3 || selectMain.value == 3 && selectResult.value == 1 ){
        changeThermometer(2)
    }
    else if(selectMain.value == 2 && selectResult.value == 3 || selectMain.value == 3 && selectResult.value == 2 ){
        changeThermometer(3)
    }
})

selectResult.addEventListener("change",()=>{
    if(selectMain.value == selectResult.value){
        selectMain.value = memorySave[1]
        selectResult.value = memorySave[0]
        memorySave = [selectMain.value, selectResult.value]
    }

    if(selectMain.value == 1 && selectResult.value == 2 || selectMain.value == 2 && selectResult.value == 1 ){
        changeThermometer(1)
    }
    else if(selectMain.value == 1 && selectResult.value == 3 || selectMain.value == 3 && selectResult.value == 1 ){
        changeThermometer(2)
    }
    else if(selectMain.value == 2 && selectResult.value == 3 || selectMain.value == 3 && selectResult.value == 2 ){
        changeThermometer(3)
    }
})


selectResult.addEventListener("mousedown",()=>{
    memorySave = [selectMain.value, selectResult.value]
})

selectMain.addEventListener("mousedown",()=>{
    memorySave = [selectMain.value, selectResult.value]
})







const fahrenheitMarks = document.querySelector(".fahrenheit_marks");
const fahrenheitMarksLeft = document.querySelector(".fahrenheit_marks_left");
const kelvinMarks = document.querySelector(".kelvin_marks");
const celsiusMarks = document.querySelector(".celsius_marks");





const changeThermometer = (condition) => {
    if(condition == 1){
        fahrenheitMarks.style.display = 'flex'
        kelvinMarks.style.display = 'none'
        celsiusMarks.style.display = 'flex'
        fahrenheitMarksLeft.style.display = 'none'
    }
    else if(condition == 2){
        fahrenheitMarks.style.display = 'none'
        kelvinMarks.style.display = 'flex'
        celsiusMarks.style.display = 'flex'
        fahrenheitMarksLeft.style.display = 'none'
    }
    else if(condition == 3){
        fahrenheitMarks.style.display = 'none'
        kelvinMarks.style.display = 'flex'
        celsiusMarks.style.display = 'none'
        fahrenheitMarksLeft.style.display = 'flex'
    }
}




const thermometerLine = document.querySelector(".thermometer_line")


let totalPixels

adjusThermometertLine = (num) => {

    totalPixels = 0

    changeBackground(num)

    if(num > 60){
        thermometerLine.style.height = `289px`
    }
    else if(num < -60){
        thermometerLine.style.height = `0px`
    }
    else{

        if(Math.sign(num) === 1){
            for (let i = 0; i < num; i++) {
            totalPixels += 3.17
            }
            thermometerLine.style.height = `calc(${totalPixels}px + 129px)`
        }
        else{
            num = num * -1
            for (let i = 0; i < num; i++) {
            totalPixels += -3.22
            }
            thermometerLine.style.height = `calc(${totalPixels}px + 129px)`
        }   
    }
}

const mainContainer = document.querySelector(".main_container")

changeBackground = (num) => {
    if(num > 25){
        mainContainer.style.background = `rgb(45, 33, 36)`
    }
    else if(num > 10){
        mainContainer.style.background = `rgb(36, 33, 36)`
    }
    else if(num < 20 && num >= 0){
        mainContainer.style.background = `rgb(32, 33, 36)`
    }
    else if(num < 0){
        mainContainer.style.background = `rgb(32, 33, 45)`
    }
}