// * Bootstrap libraries
import './_bootstrap';

// * Any other global site-wide JavaScript should be placed below.
// enable JS flag for CSS
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observerInstance.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  sections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add('is-visible');
    }
    else {
      section.classList.remove('is-visible');
      observer.observe(section);
    }
  });
});