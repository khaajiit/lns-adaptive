const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', () => {
        clearActiveClasses();

        card.classList.add('active');
    })
}

function clearActiveClasses() {
    cards.forEach((card) => {
        card.classList.remove('active');
    })
}