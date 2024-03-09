const showToastBtn = document.getElementById('showToast');

showToastBtn.addEventListener('click', () => {
  Toastify({
    text: "This is a toast notification.",
    duration: 3000,  // Duration in milliseconds
    gravity: "bottom",  // Position of the notification
    position: "right", // Position of the notification
  }).showToast();
});
