// faq part

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
      const answer = document.getElementById(question.getAttribute('aria-controls'));
      
      question.addEventListener('click', function() {
          const isExpanded = question.getAttribute('aria-expanded') === 'true';
          
          // Toggle current question
          question.setAttribute('aria-expanded', !isExpanded);
          answer.setAttribute('aria-expanded', !isExpanded);
      });
  });
});

// statics scripts
class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    this.animationStarted = false;
    this.observerOptions = {
      threshold: 0.3
    };
    this.init();
  }

  init() {
    if (this.counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animationStarted = true;
          this.animateAllCounters();
        }
      });
    }, this.observerOptions);

    const statsSection = document.querySelector('.stats-container');
    if (statsSection) observer.observe(statsSection);
  }

  formatNumber(num, format) {
    if (format === 'short') {
      if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
      if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
    }
    return num.toString();
  }

  animateCounter(element, target, format) {
    const duration = 1800;
    const startTime = performance.now();
    const startValue = 0;
    const easeOutQuad = t => t * (2 - t);

    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
      
      element.textContent = format === 'plain' 
        ? this.formatNumber(currentValue, format)
        : `+${this.formatNumber(currentValue, format)}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Final update with exact target value
        element.textContent = format === 'plain'
          ? this.formatNumber(target, format)
          : `+${this.formatNumber(target, format)}`;
      }
    };

    requestAnimationFrame(updateCounter);
  }

  animateAllCounters() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const format = counter.dataset.format || 'plain';
      this.animateCounter(counter, target, format);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CounterAnimation();
});






// certification part

document.addEventListener('DOMContentLoaded', function() {
  const slider2Wrapper = document.querySelector('.slider2__wrapper');
  const slider2Images = document.querySelectorAll('.slider2__img');
  const prevBtn = document.querySelector('.slider2__btn--prev');
  const nextBtn = document.querySelector('.slider2__btn--next');
  const indicators = document.querySelectorAll('.slider2__indicator');
  
  let currentIndex = 0;
  const totalSlides2 = slider2Images.length;
  
  function updateSlider2() {
      slider2Wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update indicators
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('slider2__indicator--active');
          } else {
              indicator.classList.remove('slider2__indicator--active');
          }
      });
  }
  
  // Next slide
  nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides2;
      updateSlider2();
  });
  
  // Previous slide
  prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides2) % totalSlides2;
      updateSlider2();
  });
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
          currentIndex = index;
          updateSlider2();
      });
  });
  
  // Auto-rotate slides (optional)
  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides2;
      updateSlider2();
  }, 3000);
}); 

  //BA Section

    window.location.href="#slide-1";
 
//header part

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.header__items');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

