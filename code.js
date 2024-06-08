

$(document).ready(function() {
    // Select the appointment form
    var appointmentForm = $('#appointmentForm');
  
    // When the form is submitted
    appointmentForm.on('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      console.log('Form submission captured!');
      
      // Gather user's information
      var name = $('#appointmentForm input[type="text"]').val();
      var email = $('#appointmentForm input[type="email"]').val();
      var service = $('#appointmentForm select').val();
      var date = $('#appointmentForm input[type="date"]').val();
      var time = $('#appointmentForm input[type="time"]').val();
   
      
      // Construct confirmation message
      var confirmationMessage = 'Appointment booked successfully, a confirmation email was sent to you! ';
	     // Set the information in the confirmation message
		$('#confirmationName').text('Name: ' + name);
        $('#confirmationEmail').text('Email: ' + email);
        $('#confirmationService').text('Service: ' + service);
        $('#confirmationDate').text('Date: ' + date);
        $('#confirmationTime').text('Time: ' + time);
   
      
      // Show the confirmation modal with user's info
	  $('.modal-body').html($('#confirmationInfo').html());
      $('#confirmationModal').modal('show');
    });
  
    // Close the confirmation modal when the OK button is clicked
    $('#confirmationModalOK').on('click', function() {
      $('#confirmationModal').modal('hide');
	  appointmentForm[0].reset(); // Reset the form fields
    });
  });

