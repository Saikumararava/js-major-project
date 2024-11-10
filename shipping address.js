document.getElementById('shipping-address-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting in the traditional way

  // Here you can perform any additional validation or operations before submission
  // For example, checking if all fields are correctly filled in
  
  // Display a confirmation message
  document.getElementById('confirmation-message').style.display = 'block';
  
  // Optionally, reset the form after submission
  this.reset();
});
