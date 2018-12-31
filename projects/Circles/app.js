// ==============
// Init Variables
// ==============

let canvasWidth = 500
let canvasHeight = 500
let form = document.getElementById("circle-form")
let ctx = circleCanvas.getContext('2d')
let regNumber = new RegExp('^[0-9]+$')
let Interval = ""

// ==============
//  Init Canvas
// ==============

ctx.canvas.width = canvasWidth
ctx.canvas.height = canvasHeight
circleCanvas.style.background = "wheat"

// ==============
//   Functions
// ==============

function sendForm() {
    let radius = document.getElementById("radius").value

    if (!regNumber.test(radius)) {
        alert("Only numbers allowed!")
        form.reset()
    } else {
        drawCircle(radius)
    }
}


function drawCircle(radius, interval) {
    if ((radius > canvasHeight / 2) || (radius > canvasWidth / 2)) {
        form.reset()
        if(interval){
            clearInterval(interval)
        } else{
            alert("Size Restriction: circle is bigger than canvas!")
        }
    } else {
        ctx.beginPath()
        ctx.arc(canvasWidth/2, canvasHeight/2, radius, 0, 2 * Math.PI)
        ctx.stroke()
        if(!interval){
            showVolume(radius)
        }
    }
}

function showVolume(radius) {
    let volume = 4 * Math.PI * Math.pow(radius, 3) / 3
    document.getElementById('volume').value = volume.toFixed(3)
}

function resetCanvasAndForm(){
    clearInterval(Interval)
    ctx.clearRect(0, 0, circleCanvas.width, circleCanvas.height)
    form.reset()
}

function autoDrawCircles(){
    let r = 0
    Interval = setInterval(function() { drawCircle(++r, Interval); }, 10)
}

autoDrawCircles()