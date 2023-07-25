let openShopping = document.querySelector(".product-item");
// let closeShopping = document.querySelector(".closeShopping");
let body = document.querySelector(".body");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
// closeShopping.addEventListener("click", () => {
//   body.classList.remove("active");
// });
let products = [
    {
      id: 1,
      name: "PRODUCT NAME 1",
      image: "produc1.jpg",
      price: 120000,
    },
    {
      id: 2,
      name: "PRODUCT NAME 2",
      image: "produc3.jpg",
      price: 120000,
    },
    {
      id: 3,
      name: "PRODUCT NAME 3",
      image: "produc4.jpg",
      price: 220000,
    },
    {
      id: 4,
      name: "PRODUCT NAME 4",
      image: "produc3.jpg",
      price: 123000,
    },
    {
      id: 5,
      name: "PRODUCT NAME 5",
      image: "produc2.jpg",
      price: 320000,
    },
    {
      id: 6,
      name: "PRODUCT NAME 6",
      image: "produc4.jpg",
      price: 120000,
    },
  ];
  
  let list = document.getElementById("product-item");
  // Khởi tạo hàm render - hàm để in dữ liệu sản phẩm
function render() {
    // Bước 1: In dữ liệu ra màn hình
    // Để duyệt qua từng phần tử có thể sử dụng hàm map() hoặc forEach()
    products.forEach((element) => {
      // Tạo HTML element
      let newdiv = document.createElement("div");
      // Set thêm thuộc tính (attribute)
      newdiv.setAttribute("id", "product-layout");
      // cách 1 thêm attribute class cho thể div mới tao
      // newdiv.setAttribute("class","item")
      // Cách 2: sử dụng classList.add("")
      newdiv.classList.add("product-layout");
      // Thêm nội dung cho thẻ div vừa tạo thông qua innerHTML
      newdiv.innerHTML= `
      <div class="product-item" id="product-item">
          <div class="product-item-img">
          <img src="./resource/image/${element.image}" alt="" class="img-product">
          </div>
          <a href="product_detail.html" class="product-item-name">
          ${element.name}
          </a>
          <p class="product-price">Price: <span>${element.price}</span>$</p>
          
            <p class="product-ship">Ship to Viet Nam</p>
            <button class="btn-add-cart" id="${element.id}">Add To Cart</button>
            </div>
      `;
     
     
      // Thêm newdiv vào thẻ cha có id là list
      list.appendChild(newdiv);
    });
  }
  
  // Gọi hàm render để in dữ liệu sản phẩm
  render();