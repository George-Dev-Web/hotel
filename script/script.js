// JavaScript for form handling
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const specialRequests = document.getElementById("special-requests").value;

    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";

    // Clear the form fields
    document.getElementById("booking-form").reset();

    // Log the booking data to the console (optional)
    console.log({
      name,
      email,
      phone,
      room,
      checkin,
      checkout,
      specialRequests,
    });

    // Optionally, send the data to a server (e.g., using fetch)
  });

// Set the minimum date for check-in and check-out
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Set min attribute to today's date for both check-in and check-out
  document.getElementById("checkin").setAttribute("min", today);
  document.getElementById("checkout").setAttribute("min", today);
});
