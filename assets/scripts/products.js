const products = [
  { id: 1, name: "T-shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 79.99 },
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>$${p.price.toFixed(2)}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart.`);
}
