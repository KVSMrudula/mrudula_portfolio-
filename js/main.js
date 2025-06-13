
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    status.textContent = "All fields are required.";
    status.style.color = "red";
  } else if (!email.match(emailPattern)) {
    status.textContent = "Please enter a valid email.";
    status.style.color = "red";
  } else {
    status.textContent = "Message sent! (Demo only)";
    status.style.color = "green";
    this.reset();
  }
});
