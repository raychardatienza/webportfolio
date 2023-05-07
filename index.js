

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
  const contactnum = document.querySelector('#contactnum').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // Update the 'Message Sent' card with the form values
  messageSentName.textContent =  name;
  messageSentContact.textContent = contactnum;
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

// Get the buttons
const scrollBtn = document.getElementById("scrollBtn");
const scrollBtns = document.getElementById("scrollBtns");

// When the user scrolls down 20px from the top of the document, show the buttons
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    scrollBtns.style.display = "block";
  } else {
    scrollBtns.style.display = "none";
  }
};

// When the user clicks on the first button, scroll back to the top of the document
scrollBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// When the user clicks on the second button, scroll to a specific section of the webpage
scrollBtns.addEventListener("click", function() {
  document.querySelector('#section3').scrollIntoView({
    behavior: 'smooth'
  });
});







/* JavaScript code to toggle light mode class */

const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const label = toggleButton.querySelector('.toggle-label');

toggleButton.addEventListener('click', () => {
   body.classList.toggle('light-mode');
   if (label.textContent === 'Dark Mode') {
     label.textContent = 'Light Mode';
   } else {
     label.textContent = 'Dark Mode';
   }
});



