document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            addToCart(productId, productName, productPrice);
            updateCartUI();
        });
    });

    function addToCart(id, name, price) {
        const existingProductIndex = cart.findIndex(product => product.id === id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
    }

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const li = document.createElement('li');

            const productName = document.createElement('span');
            productName.classList.add('cart-item-name');
            productName.textContent = `${product.name} - $${product.price}`;
            li.appendChild(productName);

            const productQuantity = document.createElement('span');
            productQuantity.classList.add('cart-item-quantity');
            productQuantity.textContent = `x ${product.quantity}`;
            li.appendChild(productQuantity);

            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('cart-item-buttons');

            const increaseButton = document.createElement('button');
            increaseButton.classList.add('cart-item-increase');
            increaseButton.textContent = '+';
            increaseButton.addEventListener('click', function() {
                addToCart(product.id, product.name, product.price);
                updateCartUI();
            });
            buttonsDiv.appendChild(increaseButton);

            const decreaseButton = document.createElement('button');
            decreaseButton.classList.add('cart-item-decrease');
            decreaseButton.textContent = '-';
            decreaseButton.addEventListener('click', function() {
                decreaseQuantity(product.id);
                updateCartUI();
            });
            buttonsDiv.appendChild(decreaseButton);

            const removeButton = document.createElement('button');
            removeButton.classList.add('cart-item-remove');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', function() {
                removeFromCart(product.id);
                updateCartUI();
            });
            buttonsDiv.appendChild(removeButton);

            li.appendChild(buttonsDiv);
            cartItemsContainer.appendChild(li);

            total += product.price * product.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    function decreaseQuantity(id) {
        const productIndex = cart.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            if (cart[productIndex].quantity > 1) {
                cart[productIndex].quantity -= 1;
            } else {
                cart.splice(productIndex, 1);
            }
        }
    }

    function removeFromCart(id) {
        const productIndex = cart.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
        }
    }

    document.getElementById('checkout').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('El carrito está vacío.');
        } else {
            alert('Compra realizada con éxito. Total: $' + cartTotalElement.textContent);
            // Aquí puedes agregar la lógica para procesar el pago
            cart.length = 0; // Vaciar el carrito
            updateCartUI();
        }
    });
});
