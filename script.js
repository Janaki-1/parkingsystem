// script.js

document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("✅ Slot booked successfully! Thank you for choosing SmartPark 🚗");
  });
});

document.querySelector(".search-box button").addEventListener("click", () => {
  alert("🔍 Searching for parking near your location...");
});