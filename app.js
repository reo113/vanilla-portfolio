
// Tab navigation for controlling the content section
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tab-content');

let currentIndex = 0;

const sections = {
    intro: `
        <div class="intro">
            <div class="text">
                Hello, I'm Robert Ortiz<span class="animated-text" id="animatedText">Software Engineer</span>
            </div>
            <img src="public/tree.jpg" alt="Robert Ortiz">
        </div>
    `,
    bubbles: `
        <div class="bubble" id="bubble 1">JavaScript</div>
        <div class="bubble" id="bubble 2">Python</div>
        <div class="bubble" id="bubble 3">Java</div>
        <div class="bubble" id="bubble 4">C++</div>
    `,
    resume: `
        <div class="timeline">
            <div class="event">
                <h3>Software Engineer</h3>
                <p>Company XYZ - 2022 - Present</p>
            </div>
            <div class="event">
                <h3>Frontend Developer</h3>
                <p>Company ABC - 2020 - 2022</p>
            </div>
        </div>
    `,
    contact: `
        <div class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name">
            
            <label for="email">Email:</label>
            <input type="email" id="email">
            
            <label for="message">Message:</label>
            <textarea id="message" rows="5"></textarea>
            
            <button type="submit">Send</button>
        </div>
    `
};

// Load the default section (Introduction)
tabContent.innerHTML = sections.intro;
animateText(); // Initial call to animate text

// Tab switching logic
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
        tab.classList.add('active'); // Add active class to the clicked tab

        const section = tab.getAttribute('data-section');
        tabContent.innerHTML = sections[section]; // Load the content for the clicked tab
        if (section === 'intro') {
            animateText();  // Ensure that the animateText function is called
        } else if (section === 'bubbles') {
            setTimeout(() => activateBubbles(), 50); // Delay to ensure DOM is updated
        }
    });

});

// Function to animate text in the introduction
const professions = ["Software Engineer", "Web Developer", "UI/UX Designer"];
let professionIndex = 0;

function animateText() {
    const animatedText = document.getElementById('animatedText');
    setInterval(() => {
        animatedText.textContent = professions[professionIndex];
        professionIndex = (professionIndex + 1) % professions.length;
    }, 2000);
}

// Function to handle bubble click event and reappear at a random location within the tab content
function activateBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    const tabContentRect = tabContent.getBoundingClientRect(); // Get the tab's content dimensions
    
    // Initial random positioning of bubbles when the section is loaded
    bubbles.forEach(bubble => {
        positionBubbleRandomly(bubble, tabContentRect);
    });

    // Add click event listener to reposition the bubble on click
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            positionBubbleRandomly(bubble, tabContentRect);
        });
    });
}

// Helper function to randomly position the bubble within the tab content's dimensions
function positionBubbleRandomly(bubble, containerRect) {
    const maxX = containerRect.width - bubble.offsetWidth;
    const maxY = containerRect.height - bubble.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;
    bubble.style.position = 'absolute'; // Ensure the bubble is absolutely positioned
}

// Infinite scrolling project section
const projectSection = document.getElementById('projects-section');
let scrollSpeed = .9;
let isPaused = false;

function scrollProjects() {
    if (!isPaused) {
        projectSection.scrollLeft += scrollSpeed;
        if (projectSection.scrollLeft >= projectSection.scrollWidth - projectSection.clientWidth) {
            projectSection.scrollLeft = 0; // Loop the scroll
        }
    }
    requestAnimationFrame(scrollProjects);
}

scrollProjects();

// Pause/Resume scroll on click
projectSection.addEventListener('click', () => {
    isPaused = !isPaused;
});





