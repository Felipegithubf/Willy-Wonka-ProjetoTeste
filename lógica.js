document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display response
    var responseElement = document.getElementById('response');
    responseElement.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;
});