 const productsJSON = `
 [ 
    {
        "id": "1",
        "image": "areca-palm.png",
        "title": "Areca Palm",
        "price": "22,00"
    },
    {
        "id": "2",
        "image": "monstera-obliqua.jpg",
        "title": "Monstera Obliqua",
        "price": "45,00"
    },
    {
        "id": "3",
        "image": "floral-moss.png",
        "title": "Floral Moss",
        "price": "45,00"
    },
    {
        "id": "4",
        "image": "monstera-obliqua.jpg",
        "title": "Monstera Obliqua",
        "price": "45,00"
    },
    {
        "id": "5",
        "image": "haworthia-venosa.png",
        "title": "Haworthia Venosa",
        "price": "48,00"
    },
    {
        "id": "6",
        "image": "silver-torch.png",
        "title": "Silver Torch",
        "price": "32,00"
    },
    {
        "id": "7",
        "image": "notocactus-roseoluteus.png",
        "title": "Notocactus Roseoluteus",
        "price": "33,00"
    },
    {
        "id": "8",
        "image": "graptosedum-darley.png",
        "title": "Graptosedum Darley",
        "price": "32,00"
    }
]
 `;


function renderProducts(products, sortOrder = 'ascending') {
    const productsContainer = document.querySelector('.product-list');
    const sortedProducts = products.slice()
                            .sort( (a, b) => sortOrder === 'ascending' ? a.price - b.price
                                                                           : b.price - a.price );
    productsContainer.innerHTML = '';
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
        <div class="price">
                        <img src="img/${product.image}"  alt="${product.title}">
                        <div class="card-body">
                            <h5>${product.title}</h5>
                            <p>${product.price}</p>
                            <a href="#contacts" class="btn btn-light">LEARN MORE</a>
                        </div>
                    </div>`
    }
}
renderProducts(JSON.parse(productsJSON));

const sortAscendingButton = document.querySelector('.sort-asc');
const sortDescendingButton = document.querySelector('.sort-desc');

sortAscendingButton.addEventListener('click', sortProductAscending);
sortDescendingButton.addEventListener('click', sortProductDescending);

function sortProductAscending() {
    sortDescendingButton.classList.remove('active');
    sortAscendingButton.classList.add('active');
    renderProducts(JSON.parse(productsJSON), 'ascending');
}

function sortProductDescending() {
    sortDescendingButton.classList.add('active');
    sortAscendingButton.classList.remove('active');
    renderProducts(JSON.parse(productsJSON), 'descending');
}