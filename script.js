function generateUpiLink() {
  const name = document.getElementById("name").value.trim();
  const upiId = document.getElementById("upiId").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!name || !upiId || !amount) {
    alert("Please fill out all fields correctly.");
    return false;
  }

  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
  const linkElement = document.getElementById("upiLink");
  linkElement.href = upiUrl;
  linkElement.textContent = upiUrl;

  document.getElementById("result").classList.remove("hidden");
  return false; // prevent form submission
}
