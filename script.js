
// Get the dropdown toggle button and the navigation menu
const dropdownToggle = document.querySelector('.dropdown-toggle');
const navMenu = document.querySelector('.navlinks nav ul');

// Add a click event listener to the toggle button
dropdownToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function () {
  const whatsappLink = document.getElementById('whatsapp-link');
  const fullnamesInput = document.getElementById('Fullnames');
  const emailInput = document.getElementById('email');
  const descriptionInput = document.getElementById('description');

  // Function to generate WhatsApp link
  function generateWhatsAppLink() {
    const fullnames = encodeURIComponent(fullnamesInput.value);
    const email = encodeURIComponent(emailInput.value);
    const description = encodeURIComponent(descriptionInput.value);

    const message = `Hello Ronez Technologies!%0A%0A*Fullnames:* ${fullnames}%0A*Email:* ${email}%0A*Description:* ${description}`;

    const whatsappUrl = `https://wa.me/254798594411?text=${message}`; // Replace with your WhatsApp number
    whatsappLink.href = whatsappUrl;
  }

  // Update WhatsApp link when form inputs change
  fullnamesInput.addEventListener('input', generateWhatsAppLink);
  emailInput.addEventListener('input', generateWhatsAppLink);
  descriptionInput.addEventListener('input', generateWhatsAppLink);

  // Generate initial WhatsApp link
  generateWhatsAppLink();
});