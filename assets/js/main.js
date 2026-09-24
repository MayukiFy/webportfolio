/**
 * ====================================================================
 * MAIN.JS - Theme Manager, Preloader, Scroll-to-Top & Scroll Reveal
 * Project: Creative Media Student Portfolio (MayuiFy)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPreloader();
  initScrollTop();
  initScrollReveal();
});

/**
 * 1. THEME MANAGER (Dark / Light Mode)
 * Checks localStorage or system preference and updates DOM
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Retrieve saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('mayuify_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('mayuify_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.setAttribute('title', 'สลับเป็นโหมดสว่าง (Light Mode)');
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.setAttribute('title', 'สลับเป็นโหมดมืด (Dark Mode)');
    }
  }
}

/**
 * 2. PRELOADER ANIMATION
 * Smoothly hides the loading screen once all assets are loaded
 */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const hidePreloader = () => {
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.remove();
    }, 600);
  };

  // Check if window is already loaded
  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 400);
  } else {
    window.addEventListener('load', () => {
      setTimeout(hidePreloader, 400);
    });
  }
}

/**
 * 3. SCROLL TO TOP BUTTON
 * Shows button when page is scrolled down > 300px
 */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 4. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
 * Provides butter-smooth, hardware-accelerated scroll reveals
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
