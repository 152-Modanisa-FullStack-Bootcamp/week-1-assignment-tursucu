import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response.data)
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach(data => console.log(data.name));

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products
      .filter(({ name, description }) => name.toLowerCase().match(/şal/g) || description.toLowerCase().match(/şal/g))
      .map(({ name, description, image }) => ({ name, description, image }));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    const productElement = document.querySelector(".products");

    mappedProducts.forEach(({ name, description, image }) => {
      productElement.innerHTML += `
      <div class="product-area">
        <div class="product">
          <img width="310" height="420" src="${image}" alt="${name}" />
          <div class="name">
            <span>${description}</span>
          </div>
      </div>
      `
    });
  });
