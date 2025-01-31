// Scroll to Top Button Functionality
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Submission Message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
});
