

// Dữ liệu
let products = [
  {
    id: 1,
    name: "Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone",
    image: "product03.jpg",
    price: 120000,
    brand: "Apple",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",
  },
  {
    id: 2,
    name: "Kasa Indoor Pan/Tilt Smart Security Camera, 1080p HD Dog Camera 2.4GHz with Night Vision, Motion Detection for Baby and Pet Monitor, Cloud & SD Card Storage, Works with Alexa & Google Home (EC70)",
    image: "product2.jpg",
    price: 120000,
    brand: "Fuji",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 3,
    name: "CORSAIR HS80 RGB WIRELESS Multiplatform Gaming Headset - Dolby Atmos - Lightweight Comfort Design - Broadcast Quality Microphone - iCUE Compatible - PC, Mac, PS5, PS4 - Black",
    image: "product3.jpg",
    price: 220000,
    brand: "Fuji",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 4,
    name: "Panasonic Baby Monitor with Camera and Audio, 3.5” Color Video, Extra Long Range, Secure Connection, 2-Way Talk, Soothing Sounds, Remote Pan, Tilt, Zoom - 1 Camera - KX-HN4101W (White)",
    image: "product11.jpg",
    price: 123000,
    brand: "Fuji",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 5,
    name: "HyperX Cloud III – Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm – Black/Red",
    image: "product14.jpg",
    price: 320000,
    brand: "Fuji",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 6,
    name: "HyperX Cloud III – Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm – Black/Red",
    image: "product2.jpg",
    price: 120000,
    brand: "Fuji",
    color: "White",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 7,
    name: "SAMSUNG 870 EVO SATA III SSD 1TB 2.5” Internal Solid State Drive, Upgrade PC or Laptop Memory and Storage for IT Pros, Creators, Everyday Users, MZ-77E1T0B/AM",
    image: "product02.jpg",
    price: 180000,
    brand: "SAMSUNG",
    color: "Black",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 8,
    name: "ASUS ROG Fusion II 300 Gaming Headset (AI Beamforming Mic with Noise Canceling, 7.1 Surround Sound, 50mm Driver, Hi-Res ESS 9280 Quad DAC, USB-C, for PC, Mac, PS4, PS5, Switch)- Black",
    image: "5.jpg",
    price: 220000,
    brand: "ASUS",
    color: "Black",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 9,
    name: "NZXT H7 Flow RGB CM-H71FB-R1 - Compact ATX Mid-Tower PC Gaming Case – High Airflow Perforated Front Panel – Tempered Glass Side Panel – 3 x F140 RGB Core Fans Included – 360mm Radiator Support – Black",
    image: "product10.jpg",
    price: 520000,
    brand: "NZXT",
    color: "Black",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
  {
    id: 10,
    name: "New SteelSeries Apex Pro TKL Wireless 2023 Ed. - World's Fastest Mechanical Gaming Keyboard – Adjustable Actuation – Esports Tenkeyless – OLED Screen – PBT Keycaps – Bluetooth 5.0 – 2.4GHz – USB-C",
    image: "product04.jpg",
    price: 280000,
    brand: "SteelSeries",
    color: "Black",
    title: "RAZER HYPERCLEAR SUPER WIDEBAND MIC — By covering a wider frequency range of sound, this next-gen detachable mic captures an incredible amount of detail in your voice, so that every shotcall to your team sounds clear, rich, and natural RAZER TRIFORCE TITANIUM 50MM DRIVERS — With titanium-coated diaphragms for added clarity, our new, cutting-edge proprietary design divides the driver into 3 parts for the individual tuning of highs, mids, and lows—producing brighter, clearer audio with richer highs and more powerful lows. RAZER HYPERSPEED",

  },
];

let list = document.getElementById("list");
let cart=JSON.parse(localStorage.getItem("carts")) ||[];


// Viêt hàm render dữ liệu cart ra bên giỏ hàng

// products.reverse();

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
    <a href="/views/product_detail.html?id=${element.id}">
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
      // alert("Add to cart successfully !!!");
      Swal.fire(
        'Add to cart successfully !!!',
        '',
        'success'
      )
    }
    else{
      cart[findIndex].count+=1;
      Swal.fire(
        'Add to cart successfully !!!',
        '',
        'success'
      )

    }
    console.log("Sau khi thêm cart",cart);
    //thêm dữ liệu cart lên local
    localStorage.setItem("carts",JSON.stringify(cart));
    //in số lượng sp trong giỏ
    let qty=document.getElementById("cart-qty");
    qty.innerText=cart.length;
    //In sp 
    renderCart();
    // renderTotal();
  }
  };



  