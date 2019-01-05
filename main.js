function populateSkills() {
    sortByTitle(skillsArr)
    let str = ``

    skillsArr.forEach(skill => {
        str += `<div class="card">`
        str += `<div class="card-body">`
        str += `<i class="${skill.icon}"></i>`
        str += `</div>`
        str += `<div class="card-footer">${skill.title}</div>`
        str += `</div>`
    })

    document.querySelector("#show-skills").innerHTML += str
}

function populateProjects() {
    sortByTitle(projectsArr)

    projectsArr.forEach(project => {
        let newCard = document.createElement("div")
        let cardBody = document.createElement("div")
        let cardFooter = document.createElement("div")

        newCard.classList.add(`card`)
        newCard.onclick = () => {
            window.open(project.link)
        }
        cardBody.classList.add('card-body')
        cardFooter.classList.add(`card-footer`)

        cardBody.innerHTML = createCardBody(project)
        cardFooter.innerHTML = createCardFooter(project)
        newCard.appendChild(cardBody)
        newCard.appendChild(cardFooter)
        document.querySelector("#show-projects").appendChild(newCard)
    })
}

function createCardBody(project) {
    let str = ``

    str += `<img class="card-image" src="${project.image}">`
    str += `<div class="overlay">`
    str += `<svg class="far fa-eye fa-4x"></svg>`
    str += `<h3>${project.title}</h3>`
    str += `</div>`

    return str;
}

function createCardFooter(project) {
    let str = ``
    project.skills.forEach(skill => {
        skillsArr.forEach(skillObj => {
            if (skillObj.title === skill) {
                str += `<i class="${skillObj.icon}"></i>`
            }
        })
    })
    return str;
}

function sortByTitle(objectsArr) {
    objectsArr.sort(function (obj1, obj2) {
        if (obj1.title < obj2.title) {
            return -1
        } else if (obj1.title === obj2.title) {
            return 0
        } else {
            return 1
        }
    })
}

function initPage() {
    populateSkills()
    populateProjects()
}

window.onload = () => {
    window.scroll(0, 60)
    initPage()
}