// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("travelDate").value;
  const travelers = document.getElementById("travelers").value;
  
  if (!destination || !date || travelers < 1) {
    document.getElementById("confirmation").innerText =
      "❌ Please fill all booking details correctly.";
    return;
  }

  document.getElementById("confirmation").innerText =
    `✅ Booking confirmed for ${travelers} traveler(s) to ${destination} on ${date}.`;
});

// Sign Up Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  // Validation rules
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const strongPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

  if (!name) {
    document.getElementById("signupMsg").innerText = "❌ Name is required.";
    return;
  }
  if (!email.match(emailPattern)) {
    document.getElementById("signupMsg").innerText = "❌ Enter a valid email address.";
    return;
  }
  if (!password.match(strongPassword)) {
    document.getElementById("signupMsg").innerText =
      "❌ Password must be at least 6 characters, include an uppercase letter, a number, and a special character.";
    return;
  }

  document.getElementById("signupMsg").innerText =
    `✅ User ${name} registered successfully with email ${email}.`;
});

// Sign In Validation
document.getElementById("signinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    document.getElementById("signinMsg").innerText = "❌ Enter a valid email address.";
    return;
  }
  if (password.length < 6) {
    document.getElementById("signinMsg").innerText = "❌ Password must be at least 6 characters.";
    return;
  }

  // Placeholder login success (later connect to backend)
  document.getElementById("signinMsg").innerText =
    `✅ Login successful for ${email}.`;
});