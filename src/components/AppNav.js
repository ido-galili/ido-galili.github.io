const AppNav = {
    data: function () {
        return {
            count: 0
        }
    },
    template: `<nav>
                    <div class="logo">
                        <a class="" href="#">
                            <svg class="fas fa-desktop"></svg>
                            <svg class="fas fa-laptop"></svg>
                            <svg class="fas fa-mobile-alt"></svg>
                        </a>
                    </div>

                    <div id="main-nav" class="nav-center">
                        <a href="#landing">About</a>
                        <a href="#skills-anchor">Skills</a>
                        <a href="#resume-anchor">Resume</a>
                        <a href="#show-case-anchor">Show Case</a>
                        <a href="#contact-anchor">Contact</a>
                    </div>

                    <div class="nav-right">
                        <a href="mailto: ido.galili@zoho.com">
                            <svg class="fas fa-envelope-square"></svg>
                        </a>
                        <a href="https://github.com/ido-galili/" target="_blank">
                            <svg class="fab fa-github-square"></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ido-galili-levin-825568b8" target="_blank">
                            <svg class="fab fa-linkedin"></svg>
                        </a>
                    </div>
                </nav>`
}