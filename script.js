document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll(
    '.story-card, .timeline-content, .chat-box, .gallery-item, .quote-box'
  );

  revealItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 120 + index * 120);
  });
});
