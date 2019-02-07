let currentCarouselItem = 0

function populateSkills() {
    let str = ``

    skillsArr.forEach(skill => {
        str += `<div class="card">`
        str += `<div class="card-body">`
        // str += `<i class="${skill.icon}"></i>`
        str += skill.icon
        str += `</div>`
        str += `<div class="card-footer">${skill.title}</div>`
        str += `</div>`
    })

    document.querySelector("#skills").innerHTML += str
}

function populateShowcase(){
    let str = ``

    sortByTitle(projectsArr)
    let random = Math.floor(Math.random() * projectsArr.length)

    projectsArr.forEach((project,i) => {
        str = ``

        let newItem = document.createElement('div')
        newItem.classList.add('carousel-item')
        newItem.id = "" + i
        newItem.onclick = () => {
            window.open(project.link)
        }

        if(random === i){
            currentCarouselItem = i
            newItem.classList.add('active') 
        }

        str += `<img src="${project.image}">`
        str += `<div class="overlay">`
        str += `<svg class="far fa-eye fa-4x"></svg>`
        str += `<h3>${project.title}</h3>`
        str += `</div>`

        newItem.innerHTML = str
        document.querySelector('.carousel').appendChild(newItem)
    })
}

function carouselMoveRight(){
    document.getElementsByClassName('active')[0].classList.remove("active")
    if(currentCarouselItem === projectsArr.length-1){
        document.getElementById('0').classList.add("active")
        currentCarouselItem = 0
    } else {
        document.getElementById('' + (++currentCarouselItem) ).classList.add("active")
    }
}

function carouselMoveLeft(){
    document.getElementsByClassName('active')[0].classList.remove("active")
    if(currentCarouselItem === 0){
        document.getElementById('' + projectsArr.length-1).classList.add("active")
        currentCarouselItem = projectsArr.length-1
    } else {
        document.getElementById('' + (--currentCarouselItem) ).classList.add("active")
    }
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
    populateShowcase()
}

window.onload = () => {
    // window.scroll(0, 60)
    initPage()
}