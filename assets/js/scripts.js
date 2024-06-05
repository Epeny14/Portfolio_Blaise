// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to open a popup
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
    }

    // Function to close a popup
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }

    // Add event listeners to open buttons
    document.querySelectorAll('.open-popup').forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            openPopup(popupId);
        });
    });

    // Add event listeners to close buttons
    document.querySelectorAll('.close').forEach(span => {
        span.addEventListener('click', () => {
            const popupId = span.getAttribute('data-popup');
            closePopup(popupId);
        });
    });

    // Close the popup if the user clicks outside of the popup content
    window.addEventListener('click', (event) => {
        document.querySelectorAll('.popup').forEach(popup => {
            if (event.target === popup) {
                closePopup(popup.id);
            }
        });
    });
});
