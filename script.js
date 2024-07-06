const form = document.getElementById('contact');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('floatingInput').value;
    const email = document.getElementById('floatingEmail').value;
    const phone = document.getElementById('floatingPhone').value;
    const message = document.getElementById('floatingMessage').value;

    fetch('/api/data', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({name, email, phone, message}),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});


/*====================== scroll reveal ======================*/
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.revealB', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true
  });
  
  ScrollReveal().reveal('.revealL', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left',
      reset: true
  });
 
  ScrollReveal().reveal('.revealR', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right',
      reset: true
  });

  ScrollReveal().reveal('.revealT', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
      reset: true
  });
});