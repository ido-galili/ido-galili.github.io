const Skills = {
    props: {
        title: String,
        subtitle: String,
        skills: Array,
    },
    template: `
        <section id="skills-anchor">
            <div class="container">
                <h1 class="horizontal-text">{{ title }}</h1>
                <p class="section-description">
                    {{ subtitle }}
                </p>
                <div id="skills" class="content">
                    <div v-for="(skill, index) in skills" :key="'skill-' + index" class="card">
                        <div class="card-body">
                            <img :src="skill.icon">
                        </div>
                        <div class="card-footer">{{ skill.title }}</div>
                    </div>
                </div>
            </div>
        </section>
    `
}