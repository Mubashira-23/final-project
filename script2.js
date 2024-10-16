$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $.ajax({
            url: 'https://your-email-sending-endpoint', // Replace with your actual endpoint
            type: 'POST',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                alert('Your message has been sent successfully!');
                $('#contact-form').trigger('reset');
            },
            error: function(error) {
                alert('An error occurred while sending your message. Please try again later.');
            }
        });
    });
});