let currentCarouselItem = 0

function initPage() {
    setSkills()
    setShowcase()
    setResume()
}

window.onload = () => {
    // window.scroll(0, 60)
    initPage()
    document.getElementById('english-btn').onclick = () => {
        let english = document.getElementById('english-resume')
        if (!english.classList.contains('resume-active')) {
            document.getElementById('hebrew-resume').classList.remove('resume-active')
            document.getElementById('english-resume').classList.add('resume-active')
        }

    }
    document.getElementById('hebrew-btn').onclick = () => {
        let hebrew = document.getElementById('hebrew-resume')
        if (!hebrew.classList.contains('resume-active')) {
            document.getElementById('english-resume').classList.remove('resume-active')
            document.getElementById('hebrew-resume').classList.add('resume-active')

        }
    }

    let mainNav = document.getElementById('main-nav');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('nav-active');
    });
}

function setSkills() {
    let str = ``

    skillsArr.forEach(skill => {
        str += `<div class="card">`
        // str += `<div class="card-body">`
        str += `<img src=${skill.icon}>`
        // str += `</div>`
        // str += `<div class="card-footer">${skill.title}</div>`
        str += `</div>`
    })

    document.querySelector("#skills").innerHTML += str
}

function setShowcase() {
    let str = ``

    let random = Math.floor(Math.random() * projectsArr.length)

    projectsArr.forEach((project, i) => {
        str = ``

        let newItem = document.createElement('div')
        newItem.classList.add('carousel-item')
        newItem.id = "" + i
        newItem.onclick = () => {
            window.open(project.link)
        }

        if (random === i) {
            currentCarouselItem = i
            newItem.classList.add('active')
        }

        str += `<img src="${project.image}">`
        str += `<div class="overlay">`
        str += `<svg class="far fa-eye fa-4x"></svg>`
        str += `<h3>${project.title}</h3>`
        // str += `<div class="overlay-icons">`
        // str += `<img src = "./src/icons/mongodb-original.svg">`
        // str += `<img src = "./src/icons/mongodb-original.svg">`
        // str += `<img src = "./src/icons/mongodb-original.svg">`
        // str += `</div>`
        str += `</div>`

        newItem.innerHTML = str
        document.querySelector('.carousel').appendChild(newItem)
    })
}

function carouselMoveRight() {
    document.getElementsByClassName('active')[0].classList.remove("active")
    if (currentCarouselItem === projectsArr.length - 1) {
        document.getElementById('0').classList.add("active")
        currentCarouselItem = 0
    } else {
        document.getElementById('' + (++currentCarouselItem)).classList.add("active")
    }
}

function carouselMoveLeft() {
    document.getElementsByClassName('active')[0].classList.remove("active")
    if (currentCarouselItem === 0) {
        document.getElementById('' + projectsArr.length - 1).classList.add("active")
        currentCarouselItem = projectsArr.length - 1
    } else {
        document.getElementById('' + (--currentCarouselItem)).classList.add("active")
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

function setResume() {
    setEnglishResume()
    setHebrewResume()
}

function setEnglishResume() {
    let str = ``

    str += `<p class="resume-title">Education</p>`

    str += getEducation(englishResumeObj)

    document.getElementById(`education-en`).innerHTML += str

    str = ``

    str += `<p class="resume-title">Work Experience</p>`

    str += getExperience(englishResumeObj)

    document.getElementById(`experience-en`).innerHTML += str
}

function setHebrewResume() {
    let str = ``

    str += `<p class="resume-title">השכלה</p>`

    str += getEducation(hebrewResumeObj)

    document.getElementById(`education-he`).innerHTML += str

    str = ``

    str += `<p class="resume-title">ניסיון תעסוקתי</p>`

    str += getExperience(hebrewResumeObj)

    document.getElementById(`experience-he`).innerHTML += str
}

function getEducation(obj) {
    let str = ``

    obj.education.forEach(block => {
        str += `<div class="resume-block">`
        str += `<p class="resume-year">${block.years}</p>`
        str += `<div class="resume-job">`
        str += `<p>${block.title}</p>`
        str += `<ul>`
        block.description.forEach(desc => {
            str += `<li>${desc}</li>`
        })

        str += `</ul>`
        str += `</div>`
        str += `</div>`
    })

    return str
}

function getExperience(obj) {
    let str = ``

    obj.experience.forEach(block => {
        str += `<div class="resume-block">`
        str += `<p class="resume-year">${block.years}</p>`
        str += `<div class="resume-job">`
        str += `<p>${block.title}</p>`
        str += `<ul>`
        block.description.forEach(desc => {
            str += `<li>${desc}</li>`
        })
        str += `</ul>`
        str += `</div>`
        str += `</div>`
    })

    return str
}