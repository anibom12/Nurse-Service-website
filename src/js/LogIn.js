document.addEventListener("DOMContentLoaded", () => {
  const errorMessage = document.getElementById("error-message");
  const redirectReason = localStorage.getItem("redirectReason");

  if (redirectReason) {
    errorMessage.textContent = redirectReason;
    errorMessage.style.display = "block";
    localStorage.removeItem("redirectReason");
  }

  const loginForm = document.getElementById("loginForm");

  if (!localStorage.getItem("adminEmail")) {
    localStorage.setItem("adminEmail", "Admin@gmail.com");
  }
  if (!localStorage.getItem("adminPass")) {
    localStorage.setItem("adminPass", "12345qwertYU**");
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const storedAdminEmail = localStorage.getItem("adminEmail");
    const storedAdminPass = localStorage.getItem("adminPass");

    // بررسی ورود مدیر یا کاربر
    if (email === storedAdminEmail && password === storedAdminPass) {
      window.location.href = "requests.html"; // مدیر به صفحه درخواست‌ها منتقل می‌شود
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const hashedPassword = btoa(password);
      const user = users.find(u => u.email === email && u.password === hashedPassword);

      if (user) {
        alert("ورود با موفقیت انجام شد");
        localStorage.setItem("loggedInUser", email);
        window.location.href = "home.html"; // کاربران معمولی به خانه منتقل می‌شوند
      } else {
        displayError("ایمیل یا گذرواژه نادرست است لطفا مجددا تلاش کنید");
      }
    }
  });

  function displayError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});