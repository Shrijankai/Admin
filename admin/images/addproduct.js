function addProduct() {
    var productID = document.getElementById("productID").value;
    var productName = document.getElementById("productName").value;
    var productQuantity = document.getElementById("productQuantity").value;
    var productPrice = document.getElementById("productPrice").value;
    var productDescription = document.getElementById("productDescription").value;

    
    var product = {
        id: productID,
        name: productName,
        quantity: productQuantity,
        price: productPrice,
        description: productDescription
    };

    
    console.log("New Product Added:");
    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("Quantity:", product.quantity);
    console.log("Price:", product.price);
    console.log("Description:", product.description);


}


var addButton = document.querySelector('button');
addButton.addEventListener('click', addProduct);