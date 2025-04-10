const menubarBtn = document.querySelector(".header-top i");
const menu = document.querySelector(".header-top ul");

menubarBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Không cho sự kiện lan ra ngoài
  menu.classList.toggle("active");
});

// Đóng menu khi click ra ngoài
document.addEventListener("click", function (e) {
  if (menu.classList.contains("active") && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// script.js
// Import firebase config trước rồi viết tiếp

// Đăng nhập Email/Password
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Đăng nhập thành công!");
      console.log(userCredential.user);
      // window.location.href = "trang-chinh.html"; // Redirect nếu cần
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Đăng nhập bằng Google
document.getElementById("google-login").addEventListener("click", function () {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      alert("Đăng nhập bằng Google thành công!");
      console.log(result.user);
      // window.location.href = "trang-chinh.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
