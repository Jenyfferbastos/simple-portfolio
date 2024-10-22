// Seleciona todas as seções com a classe fade-in
const sections = document.querySelectorAll('.fade-in');

// Adiciona a classe fade-in-visible quando a seção entra em viewport
const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
});

// Observa cada seção 
sections.forEach(section => {
    fadeInObserver.observe(section);
});

// Animação de menu ao rolar 
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});


// Animação de envio de formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Efeito  de rolagem entre seções 

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
