// register.js

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Đăng ký thành công!");
      console.log(userCredential.user); // Xem user trong console
      window.location.href = "index.html"; // chuyển về login
    })
    .catch((error) => {
      alert("Đăng ký thất bại: " + error.message);
    });
});
