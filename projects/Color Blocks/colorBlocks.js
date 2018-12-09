let boxesArr = [""]
var i = 1

function deleteBox(index) {
    boxesArr[index] = ""
    printBoxes()
}

function createBox(color) {
    var boxColor = ""

    switch (color) {
        case "blue":
            boxColor = "bg-primary"
            break
        case "green":
            boxColor = "bg-success"
            break
        case "red":
            boxColor = "bg-danger"
            break
        case "yellow":
            boxColor = "bg-warning"
            break
        default:
            break
    }

    str = ""
    str += "<div class='text-center myCard "
    str += boxColor + "'"
    str += "onclick='deleteBox(" + i + ")'" + ">" + i
    str += "</div>"

    boxesArr[i] = str
    i++

    printBoxes()
}

function printBoxes() {
    deleteBoxes()
    populateSelect()

    for (var i = 0; i < boxesArr.length; i++) {
        showBoxesDiv.innerHTML += boxesArr[i]
    }
}

function populateSelect() {
    selectBox.innerHTML = ""
    selectBox.innerHTML += "<option>Pick a Box!</option>"

    for (var i = 0; i < boxesArr.length; i++) {
        if (boxesArr[i] !== "") {
            str = ""
            str += "<option>" + i + "</option>"

            selectBox.innerHTML += str
        }

    }
}

function deleteBoxes() {
    showBoxesDiv.innerHTML = ""
}