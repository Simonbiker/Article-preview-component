const shareContactButton = document.getElementById('share-contact');
const shareSocialButton = document.getElementById('share-social');
const contactSection = document.getElementById('contact-section');
const socialSection = document.getElementById('social');

// Initial state
document.addEventListener('DOMContentLoaded', () => {
  contactSection.classList.remove('hidden'); // Show the contact section by default
  socialSection.classList.add('hidden'); // Hide the social section by default
});


document.getElementById('share-social').addEventListener('click', () => {
  contactSection.style.display = 'none'; // Hide contact section
  socialSection.style.display = 'flex'; // Show social section
});

document.getElementById('share-contact').addEventListener('click', () => {
  socialSection.style.display = 'none'; // Hide social section
  contactSection.style.display = 'flex'; // Show contact section
});


if (shareContactButton && shareSocialButton && contactSection && socialSection) {
  shareSocialButton.addEventListener('click', () => {
    contactSection.classList.add('hidden');
    socialSection.classList.remove('hidden');
  });

  shareContactButton.addEventListener('click', () => {
    socialSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
  });
} else {
  console.error('One or more elements are missing from the DOM.');
}
