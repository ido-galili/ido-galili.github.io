/* ================ */
/*   App Variables  */
/* ================ */

let tasks = []
let currentAlertClass = ""
let idCount = 0

/* ================ */
/*   Alert Const    */
/* ================ */

let pastDate = "Only future date allowd<i class='fas fa-clock'></i>"
let blankDate = "Date is required<i class='fas fa-calendar-alt'></i>"
let blankText = "Task content is required<i class='fas fa-pencil-alt'></i>"
let sendSuccess = "Task added successfuly<i class='far fa-check-circle'></i>"
let warningAlertClass = "alert-danger"
let successAlertClass = "alert-success"

initPage()

/* ================ */
/*  Main Functions  */
/* ================ */

function initPage() {
    getLocalStorage()
    printAllTasks()
}

function sendForm() {
    getLocalStorage()

    let task = {
        text: document.getElementById("text-input").value,
        date: document.getElementById("date-input").value,
        time: document.getElementById("time-input").value,
        id: idCount++
    }

    if (isFormValid(task)) {
        // Add task to array
        tasks.push(task)
        // Print Task
        printOneTask(task, true)
        // Reset form
        document.getElementById("task-form").reset()
        // Update Local Storage
        localStorage.tasks = JSON.stringify(tasks)
        localStorage.idCount = idCount
    } else {
        return false
    }
}

function popAlert(msg, alertClass) {
    let popAlert = document.getElementById("pop-alert")

    hideAlert(currentAlertClass)

    // timeout set to avoid clashing between previous and next alert
    setTimeout(function () {
        popAlert.classList.add(alertClass)
        currentAlertClass = alertClass
        popAlert.innerHTML = msg
        popAlert.style.visibility = 'visible'

        if (alertClass === successAlertClass) {
            popAlert.style.animation = '6s fade-in-out 0.1s'
        } else {
            popAlert.style.animation = '1.5s fade-in 0.1s forwards'
        }
    }, 50)
}

/* ================== */
/*  Helper Functions  */
/* ================== */

function isFormValid(task) {
    let taskDateTime = task.date + " " + task.time

    // Validate Date and Time
    if (!task.date) {
        popAlert(blankDate, warningAlertClass)
        return false
    }

    if (!isDateValid(taskDateTime)) {
        popAlert(pastDate, warningAlertClass)
        return false
    }

    // Validate Text
    if (!task.text) {
        popAlert(blankText, warningAlertClass)
        return false
    }

    popAlert(sendSuccess, successAlertClass)
    return true
}

function isDateValid(date) {
    let currentDateTime = Date.now()

    if (Date.parse(date) < currentDateTime) {
        return false
    }

    return true
}

function hideAlert() {
    if (currentAlertClass) {
        let popAlert = document.getElementById("pop-alert")
        popAlert.style.animation = '0.5s fade-out'
        popAlert.classList.remove(currentAlertClass)
        popAlert.style.visibility = 'hidden'
        popAlert.style.animation = ''
    }
}

function printAllTasks() {
    clearTasks()

    tasks.forEach(function (task) {
        printOneTask(task, false)
    })
}

function timeToString(fullDate) {
    let minutesStr = fullDate.getMinutes()
    let hoursStr = fullDate.getHours()
    let timeStr = ""


    if (minutesStr < 10) {
        minutesStr = "0" + minutesStr
    }

    if (hoursStr < 10) {
        hoursStr = "0" + hoursStr
    }

    timeStr = hoursStr + ":" + minutesStr

    return timeStr
}

function dateToString(fullDate) {
    let day = fullDate.getDate()
    let month = fullDate.getMonth() + 1 // fullDate return 0-11
    let year = fullDate.getFullYear()

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    let dateStr = day + "." + month + "." + year

    return dateStr
}

function taskToString(task) {
    let str = ""
    let timeStr = ""
    let dateStr = ""

    let date = new Date(task.date + " " + task.time)

    if (task.time) {
        timeStr = timeToString(date)
    }

    dateStr = dateToString(date)

    str += `<div class='task-header'>`
    str += `<i class='fas fa-times-circle' onclick='deleteTask(${task.id})'></i>`
    str += `</div>`
    str += `<div class='task-body'>`
    str += `<p>${task.text}</p>`
    str += `</div>`
    str += `<div class='task-footer'>`
    str += `<h6>${dateStr}</h6>`
    str += `<h6>${timeStr}</h6>`
    str += `</div>`

    return str
}

function printOneTask(task, isAnimated) {

    let newTask = document.createElement('div')

    newTask.classList.add('task');

    if (isAnimated) {
        newTask.style.animation = 'fade-in 1s forwards ease-in-out'
        // remove animation from newTask for future printAllTasks() invoke, after fade in is over.
        setTimeout(function () {
            newTask.style.opacity = '1'
            newTask.style.animation = ''
        }, 1000)
    } else {
        // When page load all tasks with full opacity, animatoin is set on tasks-section.
        newTask.style.opacity = '1'
    }

    newTask.innerHTML = taskToString(task);
    let tasksSection = document.getElementById("tasks-section")
    tasksSection.appendChild(newTask)
}

function deleteTask(id) {
    getLocalStorage()

    tasks.forEach(function (task, i) {
        if (task.id === id) {
            tasks.splice(i, 1)
        }
    })
    localStorage.tasks = JSON.stringify(tasks)
    printAllTasks()
}

function clearTasks() {
    document.getElementById("tasks-section").innerHTML = ""
}

function clearForm() {
    document.getElementById("task-form").reset()
    hideAlert()
}

function getLocalStorage() {
    if (localStorage.tasks) {
        tasks = JSON.parse(localStorage.tasks)
    }
    if (localStorage.idCount) {
        idCount = localStorage.idCount
    }
}