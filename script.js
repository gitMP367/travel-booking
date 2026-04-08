document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("travelDate").value;
  const travelers = document.getElementById("travelers").value;
  
  document.getElementById("confirmation").innerText =
    `✅ Booking confirmed for ${travelers} traveler(s) to ${destination} on ${date}.`;
});