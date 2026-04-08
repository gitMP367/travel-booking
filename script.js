// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("travelDate").value;
  const travelers = document.getElementById("travelers").value;
  
  document.getElementById("confirmation").innerText =
    `✅ Booking confirmed for ${travelers} traveler(s) to ${destination} on ${date}.`;
});

// Sign Up
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // For now, just show confirmation (later connect to backend)
  document.getElementById("signupMsg").innerText =
    `✅ User ${name} registered successfully with email ${email}.`;
});

// Sign In
document.getElementById("signinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;

  // Placeholder login check
  if (email && password) {
    document.getElementById("signinMsg").innerText =
      `✅ Login successful for ${email}.`;
  } else {
    document.getElementById("signinMsg").innerText =
      `❌ Invalid credentials.`;
  }
});