function highlightLink(link) {
  // Remove active class from all links
  var links = document.querySelectorAll('.navbar-nav .nav-link');
  links.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add active class to the clicked link
  link.classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {
  var cardsPerPage = 6; // Number of cards to display per page
  var currentPage = 1; // Current page number
  var currentFilter = "all"; // Current filter category
  var currentSort = "default"; // Current sort option

  // Function to display cards based on the current page
  function displayCards(filter, sort) {
    var cards;
    if (filter === "all") {
      cards = document.querySelectorAll(".card");
    } else {
      cards = document.querySelectorAll(
        ".card[data-filter='" + filter + "']"
      );
    }

    var sortedCards = Array.from(cards).sort(function (a, b) {
      if (sort === "title") {
        var titleA = a.querySelector(".card-title").innerText.toLowerCase();
        var titleB = b.querySelector(".card-title").innerText.toLowerCase();
        return titleA.localeCompare(titleB);
      } else if (sort === "date") {
        var dateA = a.getAttribute("data-date");
        var dateB = b.getAttribute("data-date");
        return dateA.localeCompare(dateB);
      } else {
        return 0;
      }
    });

    var startIndex = (currentPage - 1) * cardsPerPage;
    var endIndex = startIndex + cardsPerPage;

    for (var i = 0; i < sortedCards.length; i++) {
      if (i >= startIndex && i < endIndex) {
        sortedCards[i].style.display = "block";
      } else {
        sortedCards[i].style.display = "none";
      }
    }
  }

  // Function to update the pager
  function updatePager() {
    var cards;
    if (currentFilter === "all") {
      cards = document.querySelectorAll(".card");
    } else {
      cards = document.querySelectorAll(
        ".card[data-filter='" + currentFilter + "']"
      );
    }

    var totalPages = Math.ceil(cards.length / cardsPerPage);

    var pager = document.getElementById("pager");
    pager.innerHTML = "";

    for (var i = 1; i <= totalPages; i++) {
      var pageButton = document.createElement("button");
      pageButton.innerText = i;
      pageButton.classList.add("page-button");

      if (i === currentPage) {
        pageButton.classList.add("active");
      }

      pageButton.addEventListener("click", function () {
        currentPage = parseInt(this.innerText);
        displayCards(currentFilter, currentSort);
        updatePager();
      });

      pager.appendChild(pageButton);
    }
  }

  // Function to handle sorting options
  function handleSort(sort) {
    currentSort = sort;
    displayCards(currentFilter, currentSort);
    updatePager();
  }

  // Display cards for the default filter and page on page load
  var defaultFilter = "all";
  displayCards(defaultFilter, currentSort);
  updatePager();

  // Get all filter buttons
  var filterButtons = document.querySelectorAll(".filter-button");

  // Add click event listener to each filter button
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentFilter = button.getAttribute("data-filter");
      currentPage = 1; // Reset the current page to 1

      // Get all cards
      var cards = document.querySelectorAll(".card");

      // Hide all cards
      cards.forEach(function (card) {
        card.style.display = "none";
      });

      // Display the appropriate number of cards for the selected category
      displayCards(currentFilter, currentSort);
      updatePager();
    });
  });

  // Get all sort buttons
  var sortButtons = document.querySelectorAll(".sort-button");

  // Add click event listener to each sort button
  sortButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var sortOption = button.getAttribute("data-sort");
      handleSort(sortOption);
    });
  });
});

// Function to shuffle an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}






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
  // messageSentName.textContent =  name;
  // messageSentContact.textContent = contactnum;
  // messageSentEmail.textContent = email;
  // messageSentMessage.textContent = message;
  
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




