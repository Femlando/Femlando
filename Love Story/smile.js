// script.js

// Function to handle button click with alert and link opening
function handleButtonClick(url, message) {
    // Show the alert message
    alert(message);

    // After acknowledging the alert, open the specified URL in a new tab
    window.open(url, '_blank');
}

// Add event listener for the "Awaiting Your Response..." button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            handleButtonClick(
                'https://wa.link/imsa45',
                'Grateful for your interest! Happy to know you more.'
            );
        });
    }
});

// Function to handle link button click with confirmation
function handleLinkClick(url, message) {
    const userConfirmed = confirm(message); // Show confirmation dialog
    if (userConfirmed) {
        window.open(url, '_blank'); // Open the link in a new tab
    }
}

// Add event listener for the "Learn More" button
document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            handleLinkClick('https://www.youtube.com/watch?reload=9&app=desktop&v=2-ChRw7KR6A', 
                            'Get ready to dive deeper! Want to continue to the video?');
        });
    }
});

