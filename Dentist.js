// Header background change on scroll
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('bg-white/95');
      } else {
        header.classList.remove('bg-white/95');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }
