 const productsJSON = `
 [
    {
        "id": "1",
        "image": "areca-palm.png",
        "title": "Areca Palm",
        "price": "$22,00USD"
    },
    {
        "id": "2",
        "image": "monstera-obliqua.jpg",
        "title": "Monstera Obliqua",
        "price": "$45,00USD"
    },
    {
        "id": "3",
        "image": "floral-moss.png",
        "title": "Floral Moss",
        "price": "$45,00USD"
    },
    {
        "id": "4",
        "image": "monstera-obliqua.jpg",
        "title": "Monstera Obliqua",
        "price": "$45,00USD"
    },
    {
        "id": "5",
        "image": "haworthia-venosa.png",
        "title": "Haworthia Venosa",
        "price": "$48,00USD"
    },
    {
        "id": "6",
        "image": "silver-torch.png",
        "title": "Silver Torch",
        "price": "$32,00USD"
    },
    {
        "id": "7",
        "image": "notocactus-roseoluteus.png",
        "title": "Notocactus Roseoluteus",
        "price": "$33,00USD"
    },
    {
        "id": "8",
        "image": "graptosedum-darley.png",
        "title": "Graptosedum Darley",
        "price": "$32,00USD"
    }
]
 `;


function renderProducts(products, sortOrder = 'ascending') {
    const productsContainer = document.querySelector('.product-list');
    const sortedProducts = products.slice()
                               .sort( (a, b) => sortOrder === 'ascending' ? a.price - b.price
                                                                          : b.price - a.price );
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
        <div class="price">
                        <img src="img/${product.image}" width = "210px" height = "220px" alt="${product.title}">
                        <div class="card-body">
                            <h5>${product.title}</h5>
                            <p>${product.price}</p>
                            <a href="#contacts" class="btn btn-light">LEARN MORE</a>
                        </div>
                    </div>`
    }
}
renderProducts(JSON.parse(productsJSON));

document.querySelector('.sort-asc')
        .addEventListener('click', sortProductAscending);
document.querySelector('.sort-desc')
        .addEventListener('click', sortProductDescending);

function sortProductAscending() {
    
}
function sortProductDescending() {

}