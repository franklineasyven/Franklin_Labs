const products = [
  { name: "Paracetamol 500mg", description: "Pain reliever and fever reducer." },
  { name: "Amoxicillin 250mg", description: "Antibiotic used to treat infections." },
  { name: "Ibuprofen 400mg", description: "Used for pain, fever, and inflammation." },
  { name: "Vitamin D3", description: "Boosts bone and immune health." }
];

const productList = document.getElementById('productList');
const searchBox = document.getElementById('searchBox');

function displayProducts(filtered = products) {
  productList.innerHTML = '';
  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
    productList.appendChild(div);
  });
}

searchBox.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
});

// Initial render
displayProducts();
