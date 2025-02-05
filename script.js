// // Scroll to Top Button
// const scrollToTopBtn = document.getElementById('scrollToTop');

// window.addEventListener('scroll', () => {
//   scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
// });

// scrollToTopBtn.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Smooth Scroll for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });





document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Function to check visibility of sections and add animation class
  const handleScrollAnimation = () => {
    const triggerHeight = window.innerHeight * 0.8;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerHeight) {
        section.classList.add("section-visible");
      }
    });
  };

  // Show or hide the Scroll to Top button
  const handleScrollToTopButton = () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // Scroll to top functionality
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Attach scroll events
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
    handleScrollToTopButton();
  });

  // Trigger animations on load
  handleScrollAnimation();
});
