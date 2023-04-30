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


