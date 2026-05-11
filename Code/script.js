
//SKILL
document.querySelectorAll('.Skill-track').forEach(track => {
        const items = track.innerHTML;
        track.innerHTML = items + items + items; // duplikat otomatis 3x
    });

function toggleCard(card) {
    card.classList.toggle('active');
}