const loadNews = (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
        .catch(error => console.log(error))
}

const slicing = (item) => {
    item.details.slice(420);
}

// I try it with 
function thisIsWhatIWant() {
    let text;
    let person = prompt("Please enter your name:", "Authoi");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("box").innerHTML = text;
}

function thisIsIWant() {
    let text;
    let person = prompt("Write a answer:", "I am fine. How are you too?");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "I am fine too!";
    }
    document.getElementById("box").innerHTML = text;
}

setTimeout((thisIsWhatIWant),5000)
setTimeout((thisIsIWant),20000)
setTimeout(() => {
    document.getElementById("box").innerHTML = '';
}, 30000)

const displayData = (items) => {
    const itemNumbersDiv = document.getElementById('counter-results')
    const itemNumbers = items.length;
    itemNumbersDiv.innerText = ''
    itemNumbersDiv.innerText = `${itemNumbers} Characters found`;
    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML = ''
    items.forEach(item => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.classList.add('mb-3')
        cardDiv.style.maxWidth = '1205px';
        cardDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.image_url}" class="cardImg rounded-start" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text text-secondary">${item.details.length > 200 ? item.details.slice(0, 200) : item.details}...</p>
                    <div class="d-lg-flex d-sm-block">
                        <img class="author-img-width rounded-circle" src="${item.author.img}">
                        <div class="pe-5">
                            <p class="text-dark mt-1">${item.author.name === null ? 'No name found' : item.author.name}</p>
                            <p class="text-secondary">${item.author.published_date === null ? 'No date found' : item.author.published_date}</p>
                        </div>
                        <div class="mt-4 me-5">
                           <span class="fs-5"><i class="fa-solid fa-eye text-primary"></i>${item.total_view === null ? 'No view found' : `${item.total_view}M`}</span>
                        </div>
                        <div class="d-sm-block d-lg-flex">
                            <div class="me-5 mt-4">
                                <i class="fa-solid text-warning fs-4 fa-star"></i>
                                <i class="fa-solid text-warning fs-4 fa-star"></i>
                                <i class="fa-solid text-warning fs-4 fa-star"></i>
                                <i class="fa-solid text-warning fs-4 fa-star"></i>
                                <i class="fa-solid text-warning fs-4 fa-star-half-stroke"></i>
                            </div>
                            <div class="ms-4">
                                <i data-bs-toggle="modal" data-bs-target="#exampleModal" role="button" onclick="newsDetails('${item._id}')" class="fa-solid text-info fs-3 ms-5 ps-4 pointer mt-4 fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        toggleSpinner(true)
        setTimeout(() => {
            newsContainer.appendChild(cardDiv)
        }, 2000)
        setTimeout(() => {
            toggleSpinner(false)
        }, 2000)
    })
}

const newsDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayNewsDetails(data.data[0])
    }
    catch (error) {
        console.log(error);
    }
}

const displayNewsDetails = details => {
    console.log(details);
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = details.title;
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <div class="d-flex align-items-center">
        <img id="modal-body-img" class="img-thumbnail" src="${details.thumbnail_url}" alt="">
        <div>
            <p>${details.details.length > 200 ? details.details.slice(0, 200) : details.details}...</p>
            <span>Author-</span>
            <img class="rounded-circle img-thumbnail w-100" src="${details.author.img}">
            <p class="text-dark ps-5">${details.author.name === null ? 'No name found' : details.author.name}</p>
            <p class="text-secondary ps-5">${details.author.published_date === null ? 'No date found' : details.author.published_date}</p>
            <span class="fs-5"><i class="fa-solid fa-eye text-primary"></i>${details.total_view === null ? 'No view found' : `${details.total_view}M`}</span>
        </div>
    </div>
    `


}

const home = document.getElementById('home')
const international = document.getElementById('international')
const regular = document.getElementById('regular')
const all = document.getElementById('all')
const culture = document.getElementById('culture')
const breaking = document.getElementById('braking')
const sports = document.getElementById('sports')
const entertainment = document.getElementById('entertainment')
const arts = document.getElementById('arts')
home.addEventListener('click', function () {
    home.classList.add('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
international.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.add('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
all.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.add('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
regular.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.add('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
sports.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.add('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
entertainment.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.add('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
arts.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.add('bg-nav-items')
})
breaking.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.remove('bg-nav-items')
    breaking.classList.add('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})
culture.addEventListener('click', function () {
    home.classList.remove('bg-nav-items')
    international.classList.remove('bg-nav-items')
    all.classList.remove('bg-nav-items')
    culture.classList.add('bg-nav-items')
    breaking.classList.remove('bg-nav-items')
    sports.classList.remove('bg-nav-items')
    entertainment.classList.remove('bg-nav-items')
    regular.classList.remove('bg-nav-items')
    arts.classList.remove('bg-nav-items')
})

const toggleSpinner = isLoading => {
    const spinner = document.getElementById('spinner')
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}

const x = document.getElementById('myAudio')

document.getElementById('thunder').addEventListener('click', function(){
    x.play()
})

loadNews('08')
