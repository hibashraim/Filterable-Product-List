// array of product objects
const products = [
    { name: "Smart watch", 
    category: "Smartwatch", 
    price: 400, 
    image: "assets/imgs/smart1.jpg" ,
    info:"Smart watch"
},
{ name: "Smart watch", 
    category: "Smartwatch", 
    price: 799, 
    image: "assets/imgs/smart2.jpg" ,
    info:"Smart watch"
},
{
    name: "Smart watch", 
    category: "Smartwatch", 
    price: 399, 
    image: "assets/imgs/smart3.webp" ,
    info:"Smart watch"

},
{
    name: "Smart watch", 
    category: "Smartwatch", 
    price: 790.49, 
    image: "assets/imgs/smart4.jfif" ,
    info:"Smart watch"

},{
    name: "Bluetooth Speaker", 
    category: "BluetoothSpeaker", 
    price: 300, 
    image: "assets/imgs/BluetoothSpeaker.jpg" ,
    info:"Bluetooth Speaker"

},
{
    name: "Wireless Earbuds", 
    category: "WirelessEarbuds", 
    price: 150, 
    image: "assets/imgs/Wireless Earbuds.jpg" ,
    info:"Wireless Earbuds"

},
];

// Function to filter products
function filterProd(category) {
    let filteredProducts;
    let catego=document.getElementById('category')

    if (category === 'all') {
        filteredProducts = products;
  catego.innerHTML="OUR PRODUCT LISTS";
    } else {

        filteredProducts = products.filter(product => product.category === category);
          catego.innerHTML=`${category.toUpperCase()} LIST`
    }

    displayProd(filteredProducts);

    const buttons = document.querySelectorAll('#filter-btns button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
}
// display products
function displayProd(filteredProducts) {
    const productContainer = document.getElementById('prod-container');
    productContainer.innerHTML = '';
 
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category.toUpperCase()}</p>
            <p> ${product.info.toUpperCase()}</p>
            <h4>$${product.price}</h4>
        `;
        productContainer.appendChild(productCard);
    });
}
displayProd(products);