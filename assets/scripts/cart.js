const cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)} x ${item.qty}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });
  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
renderCart();
