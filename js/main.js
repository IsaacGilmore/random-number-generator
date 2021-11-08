let generateButton = document.getElementById("generateButton")
let minVal = document.getElementById("minValue")
let maxVal = document.getElementById("maxValue")
let returnValue = document.getElementById("generatedValue")
let checkbox = document.getElementById("integerCheck")

generateButton.onclick = function(){
    let tMin = Math.ceil(minVal.value)
    let tMax = Math.ceil(maxVal.value)
    if (checkbox.checked) {
        returnValue.innerHTML = Math.floor(Math.random() * (tMax - tMin + 1) + tMin)
    } else {
        returnValue.innerHTML = Math.round((Math.random() * (tMax - tMin + 1) + tMin) * 100) / 100
    }
}

checkbox.onchange = function(event) {
    console.log(checkbox.checked)
}