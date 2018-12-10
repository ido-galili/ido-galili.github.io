// =========================
//  Exercise Questions 1-10
// =========================

// Qt.1 - Calculate Sum and Average of 3 Numbers
function sumAndAvg(sumDiv, avgDiv, form) {
    var sum = 0
    var average = 0
    var limit = form.getElementsByTagName('input').length

    for (var i = 0; i < limit ; i++) {
        var temp = form.getElementsByTagName('input')[i]
        sum += Number(temp.value)
    }

    average = sum / limit

    sumDiv.innerHTML += "<strong>" + sum + "</strong>"
    avgDiv.innerHTML += "<strong>" + average.toFixed(2) + "</strong>"
    
    lockForm(form)
}

// Qt.2 - Rectangle Area and Perimeter
function recAreaAndPerimeter(len, width, areaDiv, perDiv, form){
    var area = len * width
    var perimeter = 2 * (len + width)

    areaDiv.innerHTML += "<strong>" + area.toFixed(2) + "</strong>"
    perDiv.innerHTML += "<strong>" + perimeter + "</strong>"
    
    lockForm(form) 
}

// Qt.3 - Pot Capacity
function cylinderVolume(diameter, depth, resultDiv, form){
    var radius = diameter/2
    var capacity = Math.pow(radius, 2) * Math.PI * depth

    resultDiv.innerHTML += "<strong>" + capacity.toFixed(2) + "</strong>"

    lockForm(form)
}

// Qt.4 - Movie minutes to hours
function minToHrs(minutes, resultDiv, form){
    var hours = parseInt(minutes/60)
    var remainMinutes = minutes%60

    resultDiv.innerHTML += "<br>" + "<strong>" + hours + "</strong>" + " hour(s) and " + "<strong>" + remainMinutes + "</strong>" + " minute(s)"

    lockForm(form)
}

// Qt.5 - Get Right Digit
function rightDigit(num, resultDiv, form){
    var result = num%10

    resultDiv.innerHTML += "<strong>" + result + "</strong>"

    lockForm(form)
}

// Qt.6 - Get second digit from right
function secondRightDigit(num, resultDiv, form){
    var digit = Math.floor(num/10)%10

    resultDiv.innerHTML += "<strong>" + digit + "</strong>"

    lockForm(form)
}

// Qt.7 - Get 3-digit num and print left digit
function leftDigit(num, resultDiv, form){
    var left = Math.floor(num/100)

    resultDiv.innerHTML += "<strong>" + left + "</strong>"

    lockForm(form)
}

// Qt.8 - get 2-digit num and print sum of digits
function sumOfDigits(num, resultDiv, form){
    var leftDigit = Math.floor(num/10)
    var rightDigit = num%10

    var ret = leftDigit + rightDigit

    resultDiv.innerHTML += "<strong>" + ret + "</strong>"

    lockForm(form)
}

// Qt.9 - get int from 10-99 - reverse digits
function reverseDigits(num, resultDiv, form){
    var lDigit = Math.floor(num/10)
    var rDigit = num%10

    var res = rDigit*10 + lDigit

    resultDiv.innerHTML += "<strong>" + res + "</strong>"

    lockForm(form)
}

// Qt.10 - input: number, output: closest top even number
function biggerEven(num, resultDiv, form){
    num = Math.floor(num)
    var even = num + 1

    while( (even % 2) !== 0 ){
        even++
    }

    resultDiv.innerHTML += "<strong>" + even + "</strong>"

    lockForm(form)
}

// =========================
//      Helper Functions
// =========================

// Reset form inputs and unlock inputs and submit button
function resetForm(form, divArr) {
    var inputs = form.getElementsByTagName("input")

    form.reset()
    form.getElementsByTagName("button")[0].disabled = false

    for(var i=0 ; i<inputs.length ; i++){
        inputs[i].disabled = false
    }

    for( var i=0 ; i < divArr.length ; i++){
        divArr[i].innerHTML = (divArr[i].innerHTML).substring(0, (divArr[i].innerHTML).indexOf(":") + 1)
    }
}

// Locks form inputs and submit button
function lockForm(form){
    form.getElementsByTagName("button")[0].disabled = true
    
    var inputsArr = form.getElementsByTagName("input")

    for(var i=0 ; i<inputsArr.length ; i++){
        inputsArr[i].disabled = true
    }
}

// =========================
//  Grid Functions amd Init
// =========================

var boxesIdArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
fillGridColors(boxesIdArr)

// Returns RGB random color
function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

// Paints Grid
function fillGridColors(idArr){
    for (var i = 0; i < idArr.length; i++) {
    var temp = document.getElementById(idArr[i])
    temp.style.backgroundColor = randomColor()
}
}