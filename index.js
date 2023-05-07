const contactForm = document.querySelector('#contact-form');
const contactCard = document.querySelector('#contact-card');
const messageSentCard = document.querySelector('#message-sent-card');
const messageSentName = document.querySelector('#message-sent-name');
const messageSentContact = document.querySelector('#message-sent-contact');
const messageSentEmail = document.querySelector('#message-sent-email');
const messageSentMessage = document.querySelector('#message-sent-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the form values and update the 'Message Sent' card
  const name = document.querySelector('#name').value;
  const contact = document.querySelector('#contact').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // Update the 'Message Sent' card with the form values
  messageSentName.textContent = name;
  messageSentName.textContent = contact;
  messageSentEmail.textContent = email;
  messageSentMessage.textContent = message;
  
  // Show the 'Message Sent' card and hide the contact card
  contactCard.classList.add('d-none');
  messageSentCard.classList.remove('d-none');
  
  // Alternatively, you can submit the form to the server using AJAX
  });





function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-link');

// Loop through each link and add a click event listener
navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link click event
    event.preventDefault();

    // Get the target ID from the link's "href" attribute
    const targetId = link.getAttribute('href').substring(1);

    // Scroll to the target element
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Remove the "#id" portion from the URL
    const cleanUrl = window.location.href.split('#')[0];

    // Navigate to the new URL
    window.history.replaceState(null, null, cleanUrl);
  });
});


