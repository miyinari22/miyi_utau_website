function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100">
                <a href="${product.link}">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    ${product.new ? '<span class="badge text-bg-secondary">New</span>' : ''}
                </div>
            </div>
        `;
        productGrid.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/database/db.json')
        .then(response => response.json())
        .then(data => {
            renderProducts(data.products);
        })
        .catch(error => console.error('Error fetching the products:', error));
});
