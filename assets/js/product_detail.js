let productDetail = document.getElementById("product-detail");
console.log(productDetail);
// Dữ liệu
let products = [
    {
      id: 1,
      name: "CORSAIR HS80 RGB WIRELESS Multiplatform Gaming Headset - Dolby Atmos - Lightweight Comfort Design - Broadcast Quality Microphone - iCUE Compatible - PC, Mac, PS5, PS4 - Black",
      image: "product3.jpg",
      price: 120000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",
    },
    {
      id: 2,
      name: "PRODUCT NAME 2",
      image: "product2.jpg",
      price: 120000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

    },
    {
      id: 3,
      name: "PRODUCT NAME 3",
      image: "product3.jpg",
      price: 220000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

    },
    {
      id: 4,
      name: "PRODUCT NAME 4",
      image: "product11.jpg",
      price: 123000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

    },
    {
      id: 5,
      name: "PRODUCT NAME 5",
      image: "product2.jpg",
      price: 320000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

    },
    {
      id: 6,
      name: "PRODUCT NAME 6",
      image: "product2.jpg",
      price: 120000,
      brand: "Fuji",
      color: "White",
      title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

    },
  ];
  var url_str = location.href;
  console.log(url_str);
  let url = new URL(url_str);
  let search_params = url.searchParams.get('id'); 

let productName;
let productImage;
let productPrice;
let productBrand;
let productColor;
let productTitle;
  for (let i = 0; i < products.length; i++) {
         productName=products[search_params-1].name; 
         productImage=products[search_params-1].image;    
         productPrice=products[search_params-1].price;  
         productBrand=products[search_params-1].brand;  
         productColor=products[search_params-1].color;    
         productTitle=products[search_params-1].title;    
  
  }
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  newPrice=USDollar.format(productPrice);
  console.log(productName);
  console.log(productImage);
  console.log(productPrice);

  let newdiv = document.createElement("div");
  newdiv.setAttribute("id", "item");
  newdiv.classList.add("product-layout");
  // Thêm nội dung cho thẻ div vừa tạo thông qua innerHTML
  newdiv.innerHTML = `
  <div class="product-item item1">
  <img src="/resource/image/${productImage}" alt="" class="product-img">
 </div>
 <div class="product-item item2">
 <h2 class="product-name">
 ${productName}
 </h2>
 <p class="product-item-choice">Amazon's
   <span>Choice</span>
 </p>
 <hr style="margin-top: 20px;">
 <p class="product-price">Price: ${newPrice} </p>
 <p class="product-brand product-detail">Brand: <span> ${productBrand}  </span></p>

 <p class="product-color product-detail">Color:    <span>${productColor}</span></p>
 <div class="quantity  product-detail">
   <button class="btn-minus item">-</button>
   <div class="count">1</div>
   <button class="btn-add item">+</button>
  </div>         
 <hr style="margin-top: 20px;">

 <input class="add-card-btn" type="button" value="Add to Card">
 <input class="buy-btn" type="button" value="Buy Now">
 <hr style="margin-top: 20px;">
 <p class="product-infor">
   About this item
 </p>
 <p>${productTitle}</p>
   </div>
`;
  // Thêm newdiv vào thẻ cha có id là list
  productDetail.appendChild(newdiv);
      
  
