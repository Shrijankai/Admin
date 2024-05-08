function addProduct() {
    var productID = document.getElementById("productID").value.trim();
    var productName = document.getElementById("productName").value.trim();
    var productQuantity = document.getElementById("productQuantity").value.trim();
    var productPrice = document.getElementById("productPrice").value.trim();
    var productDescription = document.getElementById("productDescription").value.trim();

    if (productID === "" || productName === "" || productQuantity === "" || productPrice === "" || productDescription === "") {
        alert("Please fill in all required fields.");
        return; // Stop form submission
    }
    // Validate stock as numeric
    if (isNaN(productQuantity)) {
        alert("Quantity should be a numeric value.");
        return; 
    }

    // Display alert with the submitted data
    alert("Product ID: " + productID + "\nProduct Name: " + productName + "\nProduct Quantity: " + productQuantity + "\nProduct Price: " + productPrice + "\nProduct Description: " + productDescription);

    
    document.getElementById("productID").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";

    alert("Product Added successfully!!!");
}