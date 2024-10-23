const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

window.addEventListener('scroll', function() {
  const progressBars = document.querySelectorAll('.progress-bar');
  const scrollPosition = window.scrollY + window.innerHeight;
  
  progressBars.forEach(bar => {
      const elementPosition = bar.offsetTop;
      const progress = bar.getAttribute('data-progress');
      
      if (scrollPosition > elementPosition) {
          const progressBar = bar.querySelector('.progress');
          progressBar.style.width = progress + '%';
      }
  });
});



const header = document.getElementById('main-header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const workImages = document.querySelectorAll('.work-img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  workImages.forEach((image, index) => {
    image.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(image);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.btn-about');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          button.classList.add('in-view');
        }, 1200); 
      }
    });
  });

  observer.observe(button);
});
