const highlight = document.createElement('div');
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

const nav = document.getElementById('nav');
const ab = document.getElementById('about');

window.addEventListener('scroll', () => {
    const top = ab.getBoundingClientRect().top;
    if (top <= 0){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
});