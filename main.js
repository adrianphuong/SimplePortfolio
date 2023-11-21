const animationElements = document.querySelectorAll('.animation');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    })
}, {
    threshold:0.5
});

for (let i = 0; i < animationElements.length; i++) {
    const el = animationElements[i];
    observer.observe(el);
}