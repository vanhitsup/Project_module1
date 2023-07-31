// Lấy dữ liệu local về
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);
// Truy vấn các thẻ HTML form cần thiết
let formLogin = document.getElementById("form");
let userLogin = document.getElementById("username");
let passLogin = document.getElementById("password");


// Truy vấn các HTML báo lỗi
let usernameErr = document.getElementById("userNameErr");
let passErr = document.getElementById("passWordErr");

// Hàm xóa lỗi
function deleteErr() {
  usernameErr.innerText = "";
  passErr.innerText = "";
}

formLogin.onsubmit = function login(e) {
  e.preventDefault();
  //   console.log("kiểm tra");
  let userLoginValue = userLogin.value;
  let passLoginValue = passLogin.value;
  // Khai báo biến user bằng việc sử dụng phương thức find() với điều kiện theo username
  // Trả về toàn bộ thông tin (thuộc tính-giá trị) của đối tượng tìm thấy
  let user = users.find((user) => user.userName === userLoginValue);

  if (userLoginValue == "") {
    usernameErr.innerText = "Username not be empty";
  } else if (!user) {
    deleteErr();
    usernameErr.innerText = "Username does not exist";
  } else {
    deleteErr();
    if (passLoginValue !== user.password) {
      deleteErr();
      passErr.innerText = "Incorrect password";
    } else {
      deleteErr();
      // Nếu đăng nhập thành công thì mọi người chuyển sang trang chủ
        alert("Logged in successfully");
     
      window.location.href = "/index.html";
    }
  }
};