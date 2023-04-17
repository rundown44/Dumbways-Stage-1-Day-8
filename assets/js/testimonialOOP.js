// function for OOP Concept
class Testimonial {
    constructor(img, quotes, name) {
        this._img = img;
        this._quotes = quotes;
        this._name = name;
    }

    get img() {
        return this._img;
    }

    set img(img) {
        this._img = img;
    }

    get quotes() {
        return this._quotes;
    }

    set quotes(quotes) {
        this._quotes = quotes;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    displayTestimonial() {
        return `
        <div class="testimonial-oop" id="testimonial-oop">
            <div class="testimonial-card">
                <div class="testimonial-img">
                    <img src="${this._img}" alt="project-img">
                </div>
                <div class="testimonial-desc">
                    <p>"${this._quotes}"</p> 
                </div>
    
                <div class="testimonial-name">
                    <p>- ${this._name}</p> 
                </div>
            </div>
        </div>`
    }
};

const testimonial1 = new Testimonial (
    "./assets/img/testimonial1.jpg",
    "Paramore beranggotakan 3 orang.",
    "Pakar musik Indonesia"
);

const testimonial2 = new Testimonial (
    "./assets/img/testimonial2.jpg",
    "Twenty One Pilot hanya beranggotakan 2 orang.",
    "Pakar Musik Amerika"
);

const testimonial3 = new Testimonial (
    "./assets/img/testimonial3.jpg",
    "Fallout Boy Beranggotakan 2 orang.",
    "Pakar musik Britania Raya"
);

let testimonials = [testimonial1,testimonial2,testimonial3];

let testimonialOOP = document.getElementById("testimonial-oop");

for (let i = 0; i < testimonials.length; i++) {
    testimonialOOP.innerHTML += testimonials[i].displayTestimonial();
};
  