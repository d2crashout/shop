const form = document.getElementById("checkout-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", e => {
  e.preventDefault();
  localStorage.removeItem("cart");
  form.style.display = "none";
  confirmation.style.display = "block";
});
