$(document).ready(function () {
  /*
  function product(productName, price, quantity, gender) {
      this.productName = productName;
      this.price = price;
      this.quantity = quantity;
      this.gender = ["boy", "girl"];
  }

  product.prototype.addToCart() {

  }

  function shoppingCart() {
      let productsInCart = [];
  }
*/
  $("#blanket")
    .mouseenter(function () {
      $(this).attr("src", "./img/girl-blanket.png");
    })
    .mouseleave(function () {
      $(this).attr("src", "./img/boy-blanket.png");
    });
});
