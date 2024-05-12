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



