// let openShopping = document.querySelector(".shopping");
// let closeShopping = document.querySelector(".closeShopping");
// let body = document.querySelector(".body");

// openShopping.addEventListener("click", () => {
//   body.classList.add("active");
// });
// closeShopping.addEventListener("click", () => {
//   body.classList.remove("active");
// });

// Dữ liệu
let products = [
  {
    id: 1,
    name: "CORSAIR HS80 RGB WIRELESS Multiplatform Gaming Headset - Dolby Atmos - Lightweight Comfort Design - Broadcast Quality Microphone - iCUE Compatible - PC, Mac, PS5, PS4 - Black",
    image: "product3.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "product2.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "product3.jpg",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "product11.jpg",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "product2.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "product2.jpg",
    price: 120000,
  },
];

let list = document.getElementById("list");
let cart=JSON.parse(localStorage.getItem("carts")) ||[];


// Viêt hàm render dữ liệu cart ra bên giỏ hàng





// Khởi tạo hàm render - hàm để in dữ liệu sản phẩm
function render() {
  // Bước 1: In dữ liệu ra màn hình
  // Để duyệt qua từng phần tử có thể sử dụng hàm map() hoặc forEach()
  products.forEach((element) => {
    // Tạo HTML element
    let newdiv = document.createElement("div");
    // Set thêm thuộc tính (attribute)
    newdiv.setAttribute("id", "item");
    // cách 1 thêm attribute class cho thể div mới tao
    // newdiv.setAttribute("class","item")
    // Cách 2: sử dụng classList.add("")
    newdiv.classList.add("item");
    // Thêm nội dung cho thẻ div vừa tạo thông qua innerHTML
    newdiv.innerHTML = `
    <a href="/views/product_detail.html">
    <div class="product-img">
      <img src="../resource/image/${element.image}" />
    </div>
    <div class="title">${element.name}</div>
    <a/>
    <div class="price">Price: ${element.price} $</div>
    <p class="product-ship">Ship to Viet Nam</p>
    <button id="${element.id}" class="btn-add">Add To Card</button>`;
    // Thêm newdiv vào thẻ cha có id là list
    list.appendChild(newdiv);
  });
}

// Gọi hàm render để in dữ liệu sản phẩm
render();



//Xử lý giỏ hàng - lấy dữ liệu trên local


list.onclick=function(e){
  if(e.target.classList.contains("btn-add")){

    let id=Number(e.target.id);
    let buyItem= products.find((e)=>e.id==id);
    console.log(buyItem);

    let findIndex= cart.findIndex((e)=>buyItem.id==e.id);
    console.log(findIndex);

    if(findIndex==-1){
      buyItem.count=1;
      cart.push(buyItem);
    }
    else{
      cart[findIndex].count+=1;
    }
    console.log("Sau khi thêm cart",cart);
    //thêm dữ liệu cart lên local
    localStorage.setItem("carts",JSON.stringify(cart));
    //in số lượng sp trong giỏ
    let qty=document.getElementById("cart-qty");
    qty.innerText=cart.length;
    //In sp 
    // renderCart();
    // renderTotal();
  }
  };


  //Tổng tiền
  // function renderTotal(){
  //   let subtotal=document.getElementById("subtotal");
  //   let sum=0;
  //   for(let i=0; i<cart.length; i++){
  //     sum+=cart[i].count*cart[i].price;
  //   }

  //   const formatter=sum.toLocaleString("es-US",{
  //     style:"currency",
  //     currency: "$",
  //   });
  //   subtotal.innerText=formatter;
  // }
  