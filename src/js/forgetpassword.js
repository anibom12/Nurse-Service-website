document.addEventListener("DOMContentLoaded", () => {
  const resetForm = document.getElementById("forgetform");
  const emailInput = document.getElementById("emailInput");

  let messageDiv = document.getElementById("message");
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.id = "message";
    messageDiv.style.marginTop = "10px";
    messageDiv.style.textAlign = "center";
    messageDiv.style.color = "red";
    resetForm.appendChild(messageDiv);
  }

  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    messageDiv.textContent = "";

    if (!validateEmail(email)) {
      messageDiv.textContent = "لطفاًایمیل‌ معتبر وارد کنید.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      messageDiv.style.color = "green";
      messageDiv.textContent = "پیام به ایمیل شما ارسال شد";
    } else {
      messageDiv.style.color = "red";
      messageDiv.textContent = "هیچ حسابی با این ایمیل یافت نشد.";
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@gmail\.com$/i;
    return emailRegex.test(email);
  }
});