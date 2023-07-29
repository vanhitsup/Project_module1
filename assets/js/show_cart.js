
let cart=JSON.parse(localStorage.getItem("carts")) ||[];

console.log("Ngoài sự kiện", cart);
// Viết hàm render dữ liệu trong cart ra bên giỏ hàng
let listCard = document.getElementsByClassName("list-cart");
console.log(listCard);

    cart.forEach((e) => {
      // Bước 1: Tạo mới thẻ li
      let newdiv = document.createElement("div");
      newdiv.classList.add("product-img-cart");

      // Bước 2: Gán nội dung cho thẻ li vừa tạo mới
      newdiv.innerHTML = `
      <img src="../resource/image/${e.image}" />
    </div>
    <div class="product-detail-cart">
        <p class="product-detail-cart-name item"> 
        ${e.name}
        </p>           
         <p class="item">
          Price: <span class="item-price">${e.price}</span> $
         </p>               
         <div class="quantity item">
          <button class="btn-minus">-</button>
          <div class="count">${e.count}</div>
          <button class="btn-add">+</button>
         </div>  
         <button class="delete-btn">Delete</button>       
      `;
      //Bước 3: Thêm li vào trong thẻ cha ul
      listCard.appendChild(div);
    });
  
