let cartItems = [];

function updateQuantity(value) {
    let curr_item = cartItems.find((ci) => ci.id == value.id);
    if(curr_item){
        curr_item.quantity += value.quantity;
        cartItems = cartItems.filter((ci) => ci.id !== value.id);
        cartItems.push(curr_item);
    }else {
        cartItems.push(value);
    }
}

function addCartItem(value) {
    cartItems = getCartAllItems();
    updateQuantity(value);
    localStorage.setItem('cart',JSON.stringify(cartItems));
}

function getCartItem(key) {
    cartItems = getCartAllItems();
    const item = cartItems.find((ci) => ci.id == key);
    return item ? item : null;
}

function getCartAllItems() {
    const value = localStorage.getItem('cart');
    return value ? JSON.parse(value) : [];
}

function removeCartItem(key) {
    cartItems = getCartAllItems();
    cartItems = cartItems.filter((ci) => ci.id !== key);
    localStorage.setItem('cart',JSON.stringify(cartItems));
}

function clearCart() {
    localStorage.removeItem('cart');
}

module.exports = {
    addCartItem,
    getCartItem,
    getCartAllItems,
    removeCartItem,
    clearCart
}