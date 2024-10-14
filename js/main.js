document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const href = card.getAttribute('data-href');
    if (href) {
      card.addEventListener('click', function(event) {
        // Prevent the card click if the user clicked on a link or button inside the card
        if (!event.target.closest('a')) {
          window.location.href = href;
        }
      });
    }
  });
});
