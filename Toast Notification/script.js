const success = document.getElementById('success');
const error = document.getElementById('error');
const invalid = document.getElementById('invalid');

success.addEventListener('click', () => {
  Toastify({
    text: "This is a success message",
    duration: 3000,  // Duration in milliseconds
    gravity: "bottom",  // Position of the notification
    position: "right", // Position of the notification
    style: {
        background: "green",
        color: "white",
        padding: "20px",
      },
  }).showToast();
});

error.addEventListener("click", () => {
    Toastify({
        text: "This is a error message",
        duration: 3000,  // Duration in milliseconds
        gravity: "bottom",  // Position of the notification
        position: "right", // Position of the notification
        stopOnFocus: true,
        style: {
            background: "red",
            color: "white",
            padding: "20px",
          },
      }).showToast();
})


invalid.addEventListener("click", () => {
    Toastify({
        text: "This is a Invalid message",
        duration: 3000,  // Duration in milliseconds
        gravity: "bottom",  // Position of the notification
        position: "right", // Position of the notification
        style: {
            background: "Yellow",
            color: "white",
            padding: "20px",
          },
      }).showToast();
})
