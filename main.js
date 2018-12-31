'use strict'

function populateSkills(){
    sortByTitle(skillsArr)
    let str = ``

    skillsArr.forEach(skill => {
        str += `<div class="skill-card card bg-light text-center border-dark mr-4 mb-4">`
        str += `<div class="card-body">`
        str += `<i class="${skill.icon}"></i>`
        str += `</div>`
        str += `<div class="card-footer border-dark">${skill.title}</div>`
        str += `</div>`
    })

    document.getElementById("showSkills").innerHTML += str
}

function populateProjects(){
    sortByTitle(projectsArr)
    let str = ``
    
    projectsArr.forEach(project => {
        str += `<div class="project-card m-4" onclick="window.open('${project.link}')">`
        str += `<img class="project-image" src="${project.image}">`
        str += `<div class="overlay-middle">`
        str += `<i class="far fa-eye fa-4x"></i>`
        str += `<h3>${project.title}</h3>`
        str += `</div>`
        str += `</div>`
    })

    document.getElementById("showProjects").innerHTML += str
}

function sortByTitle(objectsArr){
    objectsArr.sort(function(obj1, obj2){
        if (obj1.title < obj2.title){
            return -1
        } else if(obj1.title === obj2.title){
            return 0
        } else {
            return 1
        }
    })
}

function initPage(){
    populateSkills()
    populateProjects()
}

window.onload = () => {
    initPage()
}


