/**
 * ====================================================================
 * NAVBAR.JS - Sticky Navigation, Active Page Highlight & Mobile Menu
 * Project: Creative Media Student Portfolio (MayuiFy)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  highlightCurrentPage();
  initMobileMenu();
  initSmoothScroll();
});

/**
 * 1. STICKY NAVBAR EFFECT
 * Adds .scrolled class when scrolling down
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * 2. HIGHLIGHT ACTIVE PAGE IN NAVIGATION
 * Detects current HTML filename and highlights matching navigation item
 */
function highlightCurrentPage() {
  const navLinks = document.querySelectorAll('.nav-link-custom');
  if (!navLinks.length) return;

  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  // If root or empty, default to index.html
  if (!currentPage || currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;

    // Check if link matches current page
    if (linkHref === currentPage || (currentPage === 'index.html' && (linkHref === './' || linkHref === 'index.html'))) {
      link.classList.add('active');
    } else if (linkHref.startsWith('#')) {
      // For internal anchors on the same page
      if (currentPage === 'index.html' && linkHref === '#home') {
        link.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 3. MOBILE MENU TOGGLE & BACKDROP
 */
function initMobileMenu() {
  const toggler = document.getElementById('navbarToggler');
  const collapse = document.getElementById('navCollapse');
  const backdrop = document.getElementById('navBackdrop');
  const closeBtn = document.getElementById('navCloseBtn');
  const navLinks = document.querySelectorAll('.nav-collapse-wrapper .nav-link-custom');

  if (!toggler || !collapse) return;

  const openMenu = () => {
    collapse.classList.add('show');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    collapse.classList.remove('show');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  };

  toggler.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Auto close menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * 4. SMOOTH SCROLL FOR IN-PAGE ANCHORS
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
