// Custom cursor
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 4 + 'px';
    cursor.style.top = my - 4 + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx - 18 + 'px';
    cursorRing.style.top = ry - 18 + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      cursorRing.style.transform = 'scale(1.6)';
      cursorRing.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorRing.style.transform = 'scale(1)';
      cursorRing.style.opacity = '0.6';
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // Stagger children in same parent
  document.querySelectorAll('.services-grid, .portfolio-grid, .process-steps, .contact-info-block').forEach(container => {
    container.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
  });

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Portfolio Slider Logic
const slider = document.getElementById('portfolioSlider');
const btnPrev = document.getElementById('sliderPrev');
const btnNext = document.getElementById('sliderNext');

if (slider && btnPrev && btnNext) {
  const getScrollAmount = () => {
    // Scroll one item width at a time + gap (20px)
    const slide = slider.querySelector('.slide');
    return slide ? slide.offsetWidth + 20 : 300;
  };

  btnNext.addEventListener('click', () => {
    slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
}

// WhatsApp Form Submission
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value;
    
    const businessNumber = "919710708550"; // Abdul Rahim
    const message = `*New Website Enquiry*%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Email:* ${email}%0A
*Service:* ${service}%0A
*Details:* ${details}`;
    
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  });
}

