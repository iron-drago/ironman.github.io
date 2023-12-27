function bookEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventName && eventDate) {
      const confirmationMessage = `Event "${eventName}" booked for ${eventDate}.`;
      document.getElementById('bookingConfirmation').innerText = confirmationMessage;

    }
  }
  function sendMessage() {
    // Add your logic here to send the message (AJAX call, etc.)
    
    // Display confirmation text
    var confirmationText = document.getElementById('confirmationText');
    confirmationText.textContent = 'The Plan has been Confirmed!';
    Timeout(3000)
    location.reload();
  }
  function reloadPage() {

    location.reload();
  }