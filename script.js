document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a thank-you message
    document.getElementById('formResponse').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Optionally, reset the form
    this.reset();
});
