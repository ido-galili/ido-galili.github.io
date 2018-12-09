let skillsArr = [
    {
        title: "JavaScript",
        icon: "devicon-javascript-plain colored"
    },
    {
        title: "CSS3",
        icon: "devicon-css3-plain colored"
    },
    {
        title: "Bootstrap",
        icon: "devicon-bootstrap-plain colored"
    },
    {
        title: "Git",
        icon: "devicon-git-plain colored"
    },
    {
        title: "ExpressJS",
        icon: "devicon-express-original-wordmark colored"
    },
    {
        title: "NodeJS",
        icon: "devicon-nodejs-plain-wordmark colored"
    },
    {
        title: "HTML5",
        icon: "devicon-html5-plain colored"
    },
    {
        title: "MongoDB",
        icon: "devicon-mongodb-plain colored"
    },
]

let projectsArr = [
    {
        title: "Color Blocks",
        image: "./projects/Color Blocks/colorBlocks.png",
        link: "./projects/Color Blocks/colorBlocks.html",
    },
]

function populateSkills(){
    sortByTitle(skillsArr)

    skillsArr.forEach(skill => {
        let str = `<div class="card bg-light text-center border-dark mr-4 mb-4" style="width: 11rem;">
                    <div class="card-body">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="card-footer border-dark">${skill.title}</div>
                    </div>`
        showSkills.innerHTML += str
    })
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

populateSkills()