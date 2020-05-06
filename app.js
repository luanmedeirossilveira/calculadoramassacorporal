const calculateBtn = document.getElementById('calc-btn')
const resetBtn = document.getElementById('reset-btn')
const heightInput = document.getElementById('height-input')
const weightInput = document.getElementById('weight-input')

const result = document.getElementById('resultado')

const resetInputs = () =>{
    heightInput.value = ''
    weightInput.value = ''
    result.innerHTML = ''
}

const calculateBmi = () =>{
    const enteredHeight = +heightInput.value
    const enteredWeight = +weightInput.value

    const bmi = enteredWeight / (enteredHeight**2)

    const resultElement = document.createElement('ion-card')

    console.log(bmi)
    if(bmi < 18.5){
        resultElement.innerHTML = `
        <ion-card-content>
            <h2>Sua massa corporal é ${bmi}. Você está desnutrido</h2>
        </ion-card-content>
        `
    }else if(bmi >= 18.5 && bmi < 25){
        resultElement.innerHTML = `Sua massa corporal é ${bmi}. Você está  normal`
    }else if(bmi >= 25 && bmi < 30){
        resultElement.innerHTML = `Sua massa corporal é ${bmi}. Você está pré-obeso`
    }else if(bmi >= 30){
        resultElement.innerHTML = `Sua massa corporal é ${bmi}. Você está obeso`
    }else if(isNaN(bmi)){
        alert("Não é um número! Digite novamente um número!")
    }
    result.innerHTML = ''
    result.appendChild(resultElement)
}

calculateBtn.addEventListener('click', calculateBmi)
resetBtn.addEventListener('click', resetInputs)