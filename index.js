const highlight = document.createElement('div');
const nav = document.getElementById('nav');
const ab = document.getElementById('about');

highlight.id = 'highlight';
document.body.appendChild(highlight);

document.addEventListener('mousemove', function(e){
    highlight.style.background = `
    radial-gradient(
        circle at ${e.clientX}px ${e.clientY}px,
        rgba(255,255,255,0.15),
        transparent 200px
    )`;
});

window.addEventListener('scroll', () => {
    const top = ab.getBoundingClientRect().top;
    if (top <= 0){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
});

document.querySelectorAll(".project-cards").forEach(card => {
    card.addEventListener("click", () => {
        const info = card.querySelector("div");
        if(info){
            info.style.display = info.style.display === "none" ? "block" : "none";
        }
    });
});