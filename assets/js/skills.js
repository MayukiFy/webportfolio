/**
 * ====================================================================
 * SKILLS.JS - Skills Progress Animation & Interactive Hover Effects
 * Project: Creative Media Student Portfolio (MayuiFy)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initSkillsProgressAnimation();
  initSkillCardTilt();
  initSkillsFilter();
});

/**
 * 1. ANIMATE PROGRESS BARS ON SCROLL
 */
function initSkillsProgressAnimation() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.skill-progress-fill');
  if (!skillsSection || !progressBars.length) return;

  let animated = false;

  const animateBars = () => {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-percentage') || '85%';
      bar.style.width = targetWidth;
    });
    animated = true;
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateBars();
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(skillsSection);
}

/**
 * 2. SUBTLE 3D TILT EFFECT ON CARDS
 */
function initSkillCardTilt() {
  const cards = document.querySelectorAll('.skill-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/**
 * 3. SKILLS CATEGORY FILTER
 */
function initSkillsFilter() {
  const filterPills = document.querySelectorAll('.skill-filter-pill');
  const skillCards = document.querySelectorAll('.skill-card-item');

  if (!filterPills.length || !skillCards.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', function () {
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
