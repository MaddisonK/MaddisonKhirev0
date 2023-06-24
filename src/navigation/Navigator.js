export default class Navigator {
    constructor() {
        this.main_frame = $('#main-frame');

        // home
        this.homeButton = $('a[href="#"]')
            .on("click", () => {
                this.hideAllMainFrameDivs();
                this.main_frame.find('div#home').removeClass('d-none')
            })

        this.aboutButton = $('a[href="#about"]')
            .on("click", () => {
                this.hideAllMainFrameDivs();
                this.main_frame.find('div#about').removeClass('d-none')
            })

        this.projectsButton = $('a[href="#projects"]')
            .on("click", () => {
                this.hideAllMainFrameDivs();
                this.main_frame.find('div#projects').removeClass('d-none')
            })
        
        this.contactButton = $('a[href="#contact"]')
            .on("click", () => {
                this.hideAllMainFrameDivs();
                this.main_frame.find('div#contact').removeClass('d-none')
            })

        window.addEventListener('popstate', function (event) {
            // Log the state data to the console
            console.log(event.state);
        });
    }

    hideAllMainFrameDivs() {
        this.main_frame.children().addClass('d-none');
    }
}