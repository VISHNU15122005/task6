function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const subject = document.getElementById("subject").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");
  const subjectError = document.getElementById("subjectError");
  const genderError = document.getElementById("genderError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  nameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  subjectError.textContent = "";
  genderError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  const mobileRegex = /^[6-9]\d{9}$/;
  if (mobile === "") {
    mobileError.textContent = "Please enter your mobile number.";
    isValid = false;
  } else if (!mobileRegex.test(mobile)) {
    mobileError.textContent = "Enter a valid 10-digit mobile number.";
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Please select a subject.";
    isValid = false;
  }

  

  if (message === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Your message has been sent successfully!";
  }

  return false; // Prevent actual submission
}
