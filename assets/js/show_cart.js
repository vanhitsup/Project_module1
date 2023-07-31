
let cart=JSON.parse(localStorage.getItem("carts")) ||[];
console.log(cart);

let listcart = document.getElementById("list-cart");

function renderCart(){
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
}
renderCart();
  //Tổng tiền
  function renderTotal(){
    let subtotal=document.getElementById("total");
    let sum=0;
    for(let i=0; i<cart.length; i++){
      sum+=cart[i].count*cart[i].price;
      
    }
    const USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    total=USDollar.format(sum);
    subtotal.innerText=total;
  }
  renderTotal();
//in số lượng spahm trong giỏr
// let qty=document.getElementById("cart-qty");
// qty.innerText=cart.length;

//Xử lý chức năng trong giỏ hàng
//b1 ủy quyền sự kiện
listcart.onclick=function(e){
  //nút trừ
  if (e.target.classList.contains("btn-minus")) {
    let minusId=Number(e.target.id);

    let findIndex=cart.findIndex((e)=>minusId==e.id);
    console.log(findIndex);

    if(cart[findIndex].count==1){
      cart.splice(findIndex,1);
    }
    else{
      cart[findIndex].count-=1;
    }
    //cập nhật dữ liệu local
    localStorage.setItem("carts",JSON.stringify(cart));
    //in số lượng

    location.reload();
    let quantity=document.getElementById("cart-qty");
    quantity.innerText=cart.length;
    renderCart();
    renderTotal()
  }

  //Nút cộng
  if(e.target.classList.contains("btn-add")){
    let addId=Number(e.target.id);
    //tìm vị trí index của sp
    let findIndex =cart.findIndex((e)=>addId==e.id);
    cart[findIndex].count+=1;

    localStorage.setItem("carts",JSON.stringify(cart));
    let quantity=document.getElementById("cart-qty");
    quantity.innerText=cart.length;
    location.reload();
    renderCart();
    renderTotal()

  }

  //nút xóa
  if(e.target.classList.contains("btn-delete")){
    let deleteId=Number(e.target.id);

    let findIndex=cart.findIndex((e)=>deleteId==e.id);

    cart.splice(findIndex,1);

    localStorage.setItem("carts",JSON.stringify(cart));
    let quantity=document.getElementById("cart-qty");
    quantity.innerText=cart.length;
    location.reload();
    renderCart();
    renderTotal()
  }
  
}
