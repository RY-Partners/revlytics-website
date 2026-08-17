// Revlytics marketing site — shared interactions (vanilla JS, no build step)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
      navLinks.style.display = navLinks.classList.contains('is-open') ? 'flex' : '';
    });
  }

  // Persona tabs (Home — "Who it's for" section)
  const personaTabs = document.querySelectorAll('.persona-tab');
  personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-persona');
      document.querySelectorAll('.persona-tab').forEach(t => t.classList.remove('is-active'));
      document.querySelectorAll('.persona-panel').forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      document.querySelector(`.persona-panel[data-persona="${target}"]`)?.classList.add('is-active');
    });
  });

  // Use-case filter grid (Home — "Built for teams like yours")
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelectorAll('.case-card').forEach(card => {
        const cats = card.getAttribute('data-cat') || '';
        card.style.display = (target === 'all' || cats.includes(target)) ? '' : 'none';
      });
    });
  });

  // FAQ accordion (Pricing page + Home)
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      q.closest('.faq-item').classList.toggle('is-open');
    });
  });

  // Newsletter / contact form placeholders — no backend wired yet
  document.querySelectorAll('form[data-placeholder-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submission is not wired up yet — this is a skeleton page. Connect this to the real signup/contact endpoint before launch.');
    });
  });
});
