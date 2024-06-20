document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');
    const productTableBody = document.querySelector('#product-table tbody');

    let products = [];

    productForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const available = document.getElementById('available').value === 'yes';

        const product = { name, description, price, available };

        products.push(product);
        products.sort((a, b) => a.price - b.price);

        displayProducts();

        productForm.reset();
    });

    function displayProducts() {
        productTableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const priceCell = document.createElement('td');
            priceCell.textContent = product.price.toFixed(2);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            productTableBody.appendChild(row);
        });
    }
});
