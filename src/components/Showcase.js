const Showcase = {
    data: function () {
        return {
            count: 0
        }
    },
    template: `
        <section id="show-case-anchor">
            <div class="container">
                <h1 class="horizontal-text">Show Case</h1>
                <p class="section-description">You're Welcome to View My Latest Work</p>
                <div id="show-case" class="content">
                    <button class="arrow" onclick="carouselMoveLeft()">
                        <svg class="far fa-arrow-alt-circle-left"></svg>
                    </button>
                    <div class="carousel"></div>
                    <button class="arrow" onclick="carouselMoveRight()">
                        <svg class="far fa-arrow-alt-circle-right"></svg>
                    </button>
                </div>
            </div>
        </section>
    `
}



