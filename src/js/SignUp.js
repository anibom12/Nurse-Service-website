import '../css/style.css';

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const messageDiv = document.getElementById("message");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    messageDiv.textContent = "";

    if (!validateEmail(email)) {
      messageDiv.textContent = "آدرس ایمیل معتبر نیست";
      return;
    }

    if (!validatePassword(password)) {
      messageDiv.textContent = "گذرواژه شما باید حداقل دارای 8 کاراکتر و شامل حروف ،اعداد و کارکترهای خاص باشد ";
      return;
    }


    if (password !== confirmPassword) {
      messageDiv.textContent = "گذرواژه ها با هم تطابق ندارند";
      return;
    }

    if (users.find(user => user.email === email)) {
      messageDiv.textContent = " کاربری با این ایمیل قبلاً ثبت‌نام کرده است";
      return;
    }

    users.push({ username, email, password: hashPassword(password) });
    localStorage.setItem("users", JSON.stringify(users));

    alert("ثبت نام با موفقیت انجام شد");
    signupForm.reset();
    window.location.href = "Log in.html";
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  function hashPassword(password) {
    return btoa(password);
  }
});


