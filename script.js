fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Något gick fel:', error);
  });

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(produkter => {
    const container = document.getElementById('produkter');

    produkter.forEach(produkt => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${produkt.title}</h2>
        <img src="${produkt.image}" width="100">
        <p>${produkt.price} USD</p>
      `;
      container.appendChild(div);
    });
  });