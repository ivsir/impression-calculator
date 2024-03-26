// Function to update the total price based on selected options and quantity
document.addEventListener("DOMContentLoaded", function () {
  // Fetch product data from the server
  const baseUrl = "http://localhost:3000/impression-graphics/products/65fb30e6ac50534dc47485b5";
  // get product info for current product and look for pirce
  async function getProductInfo() {
    try {
      // const url = `${baseUrl}/${bannerId}`
      const response = await fetch(baseUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const data = await response.json();
      getProductId(data)
    } catch (error) {
      console.error(error);
    }
  }

  function getProductId(data) {
    console.log(data)
  }

  // Vinyl Price
  function updateTotalPrice() {
    // Get selected width and height values
    var feetWidth = parseFloat(document.getElementById("width-feet").value);
    var inchWidth = parseFloat(document.getElementById("width-inches").value);
    var selectedWidth =
      (isNaN(feetWidth) ? 0 : feetWidth * 12) +
      (isNaN(inchWidth) ? 0 : inchWidth);

    var feetHeight = parseFloat(document.getElementById("height-feet").value);
    var inchHeight = parseFloat(document.getElementById("height-inches").value);
    var selectedHeight =
      (isNaN(feetHeight) ? 0 : feetHeight * 12) +
      (isNaN(inchHeight) ? 0 : inchHeight);

    // Check if the values are valid numbers
    if (isNaN(selectedWidth) || isNaN(selectedHeight)) {
      // Display an error message or handle the invalid input as needed
      console.error("Invalid input. Please enter valid numeric values.");
      return;
    }

    // Calculate area, apply multipliers, and update the total price for vinyl

    function calculatePrice(desiredSquareInches) {
      getProductInfo();

      // Constants
      const priceIncreasePerSquareInch = 0.03935185; // Calculated to reach $2400 at 144,000 square inches

      // Calculate the new price based on the user's desired square inches
      var newPrice = desiredSquareInches * priceIncreasePerSquareInch;

      console.log(newPrice, "price");
      return newPrice;
    }

    var area = selectedWidth * selectedHeight;
    let totalPrice;

    // If either inchWidth or inchHeight is empty, set them to zero
    if (inchWidth === "" || inchHeight === "") {
      inchWidth = 0;
      inchHeight = 0;
    }

    if (area > 144) {
      totalPrice = calculatePrice(area);
    } else {
      totalPrice = 12.99;
    }

    document.getElementById("price-display").innerText = totalPrice.toFixed(2);
  }

  // Mesh price
  function updateTotalPrice2() {
    // Get selected width and height values
    var feetWidth = parseFloat(document.getElementById("width-feet-2").value);
    var inchWidth = parseFloat(document.getElementById("width-inches-2").value);
    var selectedWidth =
      (isNaN(feetWidth) ? 0 : feetWidth * 12) +
      (isNaN(inchWidth) ? 0 : inchWidth);

    var feetHeight = parseFloat(document.getElementById("height-feet-2").value);
    var inchHeight = parseFloat(
      document.getElementById("height-inches-2").value
    );
    var selectedHeight =
      (isNaN(feetHeight) ? 0 : feetHeight * 12) +
      (isNaN(inchHeight) ? 0 : inchHeight);

    // Check if the values are valid numbers
    if (isNaN(selectedWidth) || isNaN(selectedHeight)) {
      // Display an error message or handle the invalid input as needed
      console.error("Invalid input. Please enter valid numeric values.");
      return;
    }

    // Calculate area, apply multipliers, and update the total price for mesh

    function calculatePrice(desiredSquareInches) {
      getProductInfo()
      // Constants
      const priceIncreasePerSquareInch = 0.04768519; // Calculated to reach $2400 at 144,000 square inches

      // Calculate the new price based on the user's desired square inches
      var newPrice = desiredSquareInches * priceIncreasePerSquareInch;

      console.log(newPrice, "price");
      return newPrice;
    }

    var area = selectedWidth * selectedHeight;
    let totalPrice;

    // If either inchWidth or inchHeight is empty, set them to zero
    if (inchWidth === "" || inchHeight === "") {
      inchWidth = 0;
      inchHeight = 0;
    }

    if (area > 144) {
      totalPrice = calculatePrice(area);
    } else {
      totalPrice = 12.99;
    }

    document.getElementById("price-display-2").innerText =
      totalPrice.toFixed(2);
  }

  // Function to clear fields for Vinyl Banner
  function clearVinylBannerFields() {
    document.getElementById("height-feet").value = "";
    document.getElementById("height-inches").value = "";
    document.getElementById("width-feet").value = "";
    document.getElementById("width-inches").value = "";
    document.getElementById("price-display").innerText = "0.00";
    // Add more fields to clear if needed
  }

  // Function to clear fields for Mesh Banner
  function clearMeshBannerFields() {
    document.getElementById("height-feet-2").value = "";
    document.getElementById("height-inches-2").value = "";
    document.getElementById("width-feet-2").value = "";
    document.getElementById("width-inches-2").value = "";
    document.getElementById("price-display-2").innerText = "0.00";
    // Add more fields to clear if needed
  }

  // Attach event listeners for tab clicks
  document
    .querySelector('[data-w-tab="Vinyl Banner (1)"]')
    .addEventListener("click", function () {
      // Clear Mesh Banner fields
      clearMeshBannerFields();
      // Optionally, you can call the function to update total price here
      // updateTotalPrice();
    });

  document
    .querySelector('[data-w-tab="Mesh Banner (2)"]')
    .addEventListener("click", function () {
      // Clear Vinyl Banner fields
      clearVinylBannerFields();
      // Optionally, you can call the function to update total price here
      // updateTotalPrice2();
    });

  // Attach event listeners for changes in options and quantity
  document
    .getElementById("height-feet")
    .addEventListener("change", updateTotalPrice);
  document
    .getElementById("height-inches")
    .addEventListener("change", updateTotalPrice);
  document
    .getElementById("width-feet")
    .addEventListener("change", updateTotalPrice);
  document
    .getElementById("width-inches")
    .addEventListener("change", updateTotalPrice);

  document
    .getElementById("height-feet-2")
    .addEventListener("change", updateTotalPrice2);
  document
    .getElementById("height-inches-2")
    .addEventListener("change", updateTotalPrice2);
  document
    .getElementById("width-feet-2")
    .addEventListener("change", updateTotalPrice2);
  document
    .getElementById("width-inches-2")
    .addEventListener("change", updateTotalPrice2);
});
