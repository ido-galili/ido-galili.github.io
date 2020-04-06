const Resume = {
    data: function () {
        return {
            count: 0
        }
    },
    template: `
        <section id="resume-anchor">
            <div class="container">
                <h1 class="horizontal-text">Resume</h1>
                <div id="resume" class="content">
                    <div id="english-resume" class="resume-page resume-active">
                        <div>
                            <div id="education-en" class="resume-section"></div>
                            <div id="experience-en" class="resume-section"></div>
                        </div>
                    </div>
                    <div id="hebrew-resume" class="resume-page">
                        <div>
                            <div id="education-he" class="resume-section"></div>
                            <div id="experience-he" class="resume-section"></div>
                        </div>
                    </div>
                    <div id="resume-btn">
                        <button id="english-btn" class="btn-red">English</button>
                        <button id="hebrew-btn">Hebrew</button>
                    </div>
                </div>
            </div>
        </section>
    `
}