const Contact = {
    data: function () {
        return {
        count: 0
        }
    },
    template: `
        <section id="contact-anchor">
            <div class="container">
                <h1 class="horizontal-text">Contact Me</h1>
                <div id="contact" class="content">
                    <div class="contact-icons">
                        <a href="mailto: ido.galili@zoho.com">
                            <svg class="fas fa-envelope-square"></svg>
                            <p>ido.galili@zoho.com</p>
                        </a>
                    </div>
                    <div class="contact-icons">
                        <a href="https://github.com/ido-galili/" target="_blank">
                            <svg class="fab fa-github-square"></svg>
                            <p>ido-galili</p>
                        </a>
                    </div>
                    <div class="contact-icons">
                        <a href="https://www.linkedin.com/in/ido-galili-levin-825568b8" target="_blank">
                            <svg class="fab fa-linkedin"></svg>
                            <p>Ido Galili-Levin</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `
}