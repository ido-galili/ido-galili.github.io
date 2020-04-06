const About = {
    data: function () {
        return {
        count: 0
        }
    },
    template: `
    <section id="landing">
        <div class="container">
            <div id="about" class="content">
                <div id="image" class="vertical-rule">
                    <img src="./images/ido.jpg" />
                    <h1>Ido Galili</h1>
                    <h1>Fullstack Student</h1>
                </div>
                <p id="about-desc">
                    Hello, my name is Ido
                    <br />
                    <br />I'm enthusiast about coding, <br />Always pursuing Simple and
                    Intuitive UI and UX
                    <br />
                    <br />Based in Kfar Giladi, Israel
                    <br />
                    <br />Feel free to contact me at ido.galili@zoho.com
                </p>
            </div>
        </div>
    </section>
    `
}