// Navigation function
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Random facts array
const randomFacts = [
    "🐰 A baby rabbit is called a 'kit' or 'kitten'!",
    "🐹 Hamsters can run backwards as easily as they run forwards!",
    "🐰 Rabbits can jump up to 36 inches high in a single leap!",
    "🐹 A hamster's heart beats around 450 times per minute!",
    "🐰 Bunnies can see behind themselves without turning their heads!",
    "🐹 Hamsters are born with their eyes closed and ears sealed!",
    "🐰 Rabbits can purr when they're happy, similar to cats!",
    "🐹 The largest hamster species can grow up to 13 inches long!",
    "🐰 A group of rabbits is called a 'fluffle'!",
    "🐹 Hamsters can squeeze through spaces as small as a quarter!",
    "🐰 Rabbits have 28 teeth that never stop growing!",
    "🐹 Some hamster species can travel up to 8 miles in one night!",
    "🐰 Bunnies can't vomit, so they're very careful about what they eat!",
    "🐹 Hamsters are colorblind and see the world in shades of gray!",
    "🐰 Rabbits can detect predators from over 2 miles away!",
    "🐹 Female hamsters are usually larger and more dominant than males!"
];

// Generate random fact function
function generateFact() {
    const factDisplay = document.getElementById('random-fact');
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    
    // Add animation
    factDisplay.style.animation = 'none';
    setTimeout(() => {
        factDisplay.style.animation = 'bounce 0.5s ease-out';
        factDisplay.textContent = randomFacts[randomIndex];
    }, 10);
}

// Add smooth scrolling
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});