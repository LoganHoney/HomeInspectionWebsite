// Simple scroll animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});


// Mailto form submission
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  const subject = encodeURIComponent(`Contact from Blue Falcon Home Inspections Website`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  // Construct the mailto URL
  const mailtoLink = `mailto:bluefalconinspections@gmail.com?subject=${subject}&body=${body}`;

  // Open the user's default mail client
  window.location.href = mailtoLink;
});
