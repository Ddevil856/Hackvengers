const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

function handlePasswordChange() {
  if (
    confirmPasswordInput.value &&
    passwordInput.value !== confirmPasswordInput.value
  ) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "";
    passwordError.textContent = "";
  }
}

function handleConfirmPasswordChange() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "";
    passwordError.textContent = "";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (
    !passwordInput.value ||
    !confirmPasswordInput.value ||
    passwordInput.value !== confirmPasswordInput.value
  ) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "Passwords do not match";
  } else {
    console.log("Form submitted successfully");
  }
}

passwordInput.addEventListener("input", handlePasswordChange);
confirmPasswordInput.addEventListener("input", handleConfirmPasswordChange);
document
  .getElementById("password-form")
  .addEventListener("submit", handleSubmit);
