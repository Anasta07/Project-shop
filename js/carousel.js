const carouselItemsData = [
    {
        "img": "plans-for-home.jpg",
        "title": "Plants for Home",
        "description": "We offer a huge selection of flowers and evergreens that will be a joy to see for many years. A charming plant will be a great addition to the interior."
    },
    {
        "img": "plants-for-garden.jpg",
        "title": "Plants for Garden",
        "description": "Turn your yard into a colorful lawn! Here you will find dozens of varietiesof flowers, both in the form of seeds, and already sprouted."
                            
                            
    },
    {
        "img": "plant-food.jpg",
        "title": "Plant Food",
        "description": "We offer everything you need to care for plants. Here you'll find a wide selection of fertilizers and dicinal products to combat flower diseases."
    },
    {
        "img": "flowerpots.jpg",
        "title": "Sale of Flowerpots",
        "description": "Purchase flowerpots for plants of any type, from small flowers to huge palm trees. Our store offers only quality flowerpots from trusted manufacturers."                       
    },
    {
        "img": "soil.jpeg",
        "title": "Soil for plants",
        "description": "It's not easy to find quality soil in New York. We offer the best options for your plants. The soil we sell is decontaminated and enriched with nutrients."
    }
]

const carouselItems = document.querySelectorAll('.carousel-item');
if (carouselItems.length === carouselItemsData.length) {
    carouselItemsData.forEach((carouselItemData, index) => {
        carouselItems[index].innerHTML += `
            <div class="price">
                        <img src="img/carousel/${carouselItemData.img}" alt="${carouselItemData.title}">
                        <div class="card-body">
                            <h5 class="card-title">${carouselItemData.title}</h5>
                            <p class="card-text">${carouselItemData.description}</p>
                            <a href="#contacts" class="btn btn-light">LEARN MORE</a>
                        </div>
                    </div>
        `;
    });
}


const nextIcon = document.querySelector('.next');
nextIcon.addEventListener('click', showNext);

const previousIcon = document.querySelector('.prev');
previousIcon.addEventListener('click', showPrevious);

let currentIndex = 0;

function showNext() {
    let activeElements = document.querySelectorAll('.carousel-item.active');
    let hiddenElements = document.querySelectorAll('.carousel-item:not(.active)');
    const container = document.querySelector('.carousel-items');
    const allElement = document.querySelectorAll('.carousel-item');
    const paginationElements = document.querySelectorAll('.pagination-button');

    let firstActive = activeElements[0];
    paginationElements[currentIndex].classList.remove('current');
    firstActive.classList.remove('active');
    container.appendChild(firstActive);
    currentIndex++;
    if (currentIndex > allElement.length - 1) {
        currentIndex = 0;
    }
    hiddenElements[0].classList.add('active');
    paginationElements[currentIndex].classList.add('current');
}

function showPrevious() {
    let activeElements = document.querySelectorAll('.carousel-item.active');
    let hiddenElements = document.querySelectorAll('.carousel-item:not(.active)');
    const container = document.querySelector('.carousel-items');
    const allElement = document.querySelectorAll('.carousel-item');
    const paginationElements = document.querySelectorAll('.pagination-button');

    let lastHidden = hiddenElements[hiddenElements.length - 1];
    lastHidden.classList.add('active');
    paginationElements[currentIndex].classList.remove('current');
    container.prepend(lastHidden);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allElement.length - 1;
    }
    let lastActive = activeElements[activeElements.length - 1];
    lastActive.classList.remove('active');
    paginationElements[currentIndex].classList.add('current');
}

document.querySelectorAll('.pagination-button').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        if (currentIndex < index) {
            for (let i = currentIndex; i < index; i++) {
                console.log(currentIndex);
                console.log(index);
                showNext();
            }
        } else {
            for (let i = currentIndex; i > index; i--) {
                console.log(currentIndex);
                console.log(index);
                showPrevious();
            }
        }
    })
});
  