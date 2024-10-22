// Example of how you could implement a basic filter (optional)
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            sections.forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
        });
    });
});
