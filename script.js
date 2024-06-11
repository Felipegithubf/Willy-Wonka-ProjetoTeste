document.addEventListener("DOMContentLoaded", function() {
    createCandies();
  });
  
  function createCandies() {
    const candiesContainer = document.getElementById('candies-container');
  
  
    setInterval(function() {
      const candy = document.createElement('div');
      candy.className = 'candy';
      candy.style.left = Math.random() * window.innerWidth + 'px';
      candiesContainer.appendChild(candy);
  
     
      candy.style.animation = 'roll 8s linear forwards';
  
      candy.addEventListener('click', function() {
        
        candiesContainer.removeChild(candy);
       
      });
  
      
      setTimeout(function() {
        candiesContainer.removeChild(candy);
      }, 10000);
    }, 1000);
  }

  // lógica do formulario pra enviar//

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



