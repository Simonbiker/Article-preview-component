const shareButton = document.getElementById('share-social');
const contact = document.getElementById('contact-section');
const socialContacts = document.getElementById('social');

// Check if elements exist to avoid null errors
if (shareButton && contact && socialContacts) {
  shareButton.addEventListener('click', () => {
    // Add 'hidden' class to hide contact section
    contact.classList.add('hidden');
    // Remove 'hidden' class to show social section
    socialContacts.classList.remove('hidden');
  });
} else {
  console.error('One or more elements are missing in the DOM');
}