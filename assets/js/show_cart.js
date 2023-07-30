
let cart=JSON.parse(localStorage.getItem("carts")) ||[];
console.log(cart);

let listcart = document.getElementById("list-cart");
if(cart== [] || cart ==0 ){
  let newli=document.createElement("li");
  newli.innerHTML= `
  <div class="cart-empty">
        <h2>Your Amazon Cart is empty.</h2>
  </div>
  `;
  listcart.appendChild(newli);

}
else{

  
cart.forEach((e)=>{
  let li=document.createElement("li");
  li.innerHTML=`
  <div class="product-img">
  <img src="/resource/image/${e.image}" alt="">
</div>
<div class="product-detail">
  <div class="product-name">${e.name}
    </div>
  <div class="produc-price">${e.price} $</div>
  <div class="btn">
    <button class="btn-minus" id=${e.id}>-</button>
    <div class="count">${e.count}</div>
    <button class="btn-add" id=${e.id}>+</button>
  </div>
  <button class="btn-delete" id=${e.id}>Delete</button>
</div>
  `;

  listcart.appendChild(li);
});

}
