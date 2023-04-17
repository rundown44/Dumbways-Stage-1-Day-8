function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


if (name == ""){
    return alert("Name cannot be empty")
} else if(email == ""){
    return alert("Please type your email")
} else if (phone == ""){
    return alert("Please type your number")
} else if(subject == ""){
    return alert("Please choose one")
} else if(message == ""){
    return alert("Please enter your message")
};

const destination = "aarifaziz77@gmail.com"
let a = document.createElement("a")
a.href = `mailto:${destination}?subject=${subject}&body= Hai! My name is ${name}, ${subject} ASAP. You can reach me at ${phone} or ${email}. PS ${message}`

a.click();

    let data = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    console.log(data);
}



let projects = []

function getProject(event){
    event.preventDefault()

    let projectName = document.getElementById("project").value 
    let startDate = document.getElementById("start").value 
    let endDate = document.getElementById("end").value 
    let description = document.getElementById("description").value 
    let nodeJS = document.getElementById("nodejs").checked 
    let nextJS = document.getElementById("nextjs").checked 
    let reactJS = document.getElementById("reactjs").checked 
    let typeScript = document.getElementById("typescript").checked 
    let image = document.getElementById("upload").files

    image = URL.createObjectURL(image[0])


    let project = {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        description: description,
        nodeJS: nodeJS,
        nextJS: nextJS,
        reactJS: reactJS,
        typeScript: typeScript,
        image: image
    };

    projects.push(project);
    console.log(projects);
    renderBlog()
}


function renderBlog() {
    document.getElementById("contents").innerHTML = ""
    
    for(let i = 0; i < projects.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="flex-style">
                <div class="project-detail">
                    <div class="inner-project" id="contents">
                        <div>
                            <img src="${projects[i].image}" alt="project-img">
                        </div>
                    
                        <div class="project-title">
                            <a href="myProjectDetail.html">
                                <h3>${projects[i].projectName}</h3> 
                            </a>
                        </div>

                        <div class="duration">
                            <p>Duration : ${getDuration(projects[i].startDate, projects[i].endDate)}</p> 
                        </div>

                        <div class="project-desc">
                            <p>${projects[i].description}</p>
                        </div>

                        <div class="logo-tech">
                            ${projects[i].nodeJS ? "<img src='./assets/img/node.js.png'>" : ""}
                            ${projects[i].nextJS ? "<img src='./assets/img/next.js.png'>" : ""}
                            ${projects[i].reactJS ? "<img src='./assets/img/react.js.png'>" : ""}
                            ${projects[i].typeScript ? "<img src='./assets/img/typescript.png'>" : ""}
                        </div>
                        
                        <div class="project-button">
                            <div class="edit">
                                <button>edit</button>
                            </div>
                            
                            <div class="delete">
                                <button>delete</button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>`
    }
}

function getDuration(startDate, endDate) {
    const distance = new Date(endDate) - new Date(startDate)
    const yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000))
    if(yearDistance > 0) {
      return yearDistance + " Year"
    } else {
      const monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
      if(monthDistance > 0) {
        return monthDistance + " Month"
      } else {
        const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
        if(dayDistance > 0) {
          return dayDistance + " Day"
        }
      }
    }
  }


//   function for Hamburger Menu

let menuHamburger = false;
function menuHamburgerNav() {
    let hamburgerNav = document.getElementById("hamburger-nav")
    if(!menuHamburger) {
        hamburgerNav.style.display = "block";
        menuHamburger = true;
    } else {
        hamburgerNav.style.display = "none";
        menuHamburger = false;
    }
}


// function for HOF & CALLBACk

const testimonialDummy = [
    {
        name: "Paramore",
        desc: "Paramore beranggotakan 3 orang.",
        rating: 1,
        image: "./assets/img/testimonial1.jpg"
    },
    {
        name: "Twenty One Pilot",
        desc: "Twenty One Pilot hanya beranggotakan 2 orang.",
        rating: 2,
        image: "./assets/img/testimonial2.jpg"
    },
    {
        name: "Fallout Boy",
        desc: "Fallout Boy hanya beranggotakan 2 orang.",
        rating: 3,
        image: "./assets/img/testimonial3.jpg"
    },
    {
        name: "Panic! At The Disco",
        desc: "Panic! At The Disco bubar tahun ini !",
        rating: 4,
        image: "./assets/img/testimonial4.jpg"
    },
]

function showTestimonial() {
    let testimonialHere = ''

    testimonialDummy.forEach((item) => {
        testimonialHere += `
        <div class="testimonial-hof" id="testimonial-hof">
            <div class="testimonial-card">
                <div class="testimonial-img">
                    <img src="${item.image}" alt="project-img">
                </div>
                <div class="testimonial-desc">
                    <p>"${item.desc}"</p> 
                </div>
                <div class="testimonial-rating">
                    <div class="testimonial-name">
                        <p>- ${item.name}</p> 
                    </div>
                    <div>
                        <p>${item.rating} <i class="fa fa-star"></i></p> 
                    </div>
                </div>
            </div>
        </div>`
    })

    document.getElementById("testimonial-hof").innerHTML = testimonialHere
}
showTestimonial()

// filter function

function filterTestimonial(rating) {
    let testimonialHere = ''

    const dataFiltered = testimonialDummy.filter(function (data) {
        return data.rating === rating
    })
    console.log(dataFiltered)

    if(dataFiltered.length === 0) {
        testimonialHere = `<h3> DATA NOT FOUND! <br/>BUT I LOVE ALL OF THEM! </h3>`
    } else {
        dataFiltered.forEach((data) => {
            testimonialHere += `
            <div class="testimonial-oop" id="testimonial-oop">
                <div class="testimonial-card">
                    <div class="testimonial-img">
                        <img src="${data.image}" alt="project-img">
                    </div>
                    <div class="testimonial-desc">
                        <p>"${data.desc}"</p> 
                    </div>
                    <div class="testimonial-rating">
                        <div class="testimonial-name">
                            <p>- ${data.name}</p> 
                        </div>
                        <div>
                            <p>${data.rating} <i class="fa fa-star"></i></p> 
                        </div>
                    </div>
                </div>
            </div>`
        })
    }

    document.getElementById("testimonial-hof").innerHTML = testimonialHere
}


// part upgrade

// if (projectName == ""){
//     return alert("Please insert your project title")
//     } else if (startDate == ""){
//         return alert("Please input your start date")
//     } else if (endDate == ""){
//         return alert("Please input your end date")
//     } else if (description == ""){
//         return alert("Please enter your project description")
//     } else if (image == ""){
//         return alert("Please upload your image from computer")
// };

