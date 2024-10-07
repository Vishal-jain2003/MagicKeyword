// Remove alert for cleaner code
// alert('copyright owner Vishal jain');

const container = document.getElementById("keycontainer");

// Initialize the container with default values
container.innerHTML = generateHTML("-", "-", "-");

// Event listener for keydown event
window.addEventListener("keydown", (e) => {
    const key = e.key === " " ? "Space" : e.key;
    const keyCode = e.code; // e.code returns the physical key on the keyboard
    const keyCharCode = key.charCodeAt(0) || "-"; // Handle potential edge cases
    container.innerHTML = generateHTML(key, keyCode, keyCharCode);
});

// Add event listeners for virtual keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const keyName = key.getAttribute('data-key');
        const keyCode = `Key${keyName.toUpperCase()}`;
        const keyCharCode = keyName.charCodeAt(0); // ASCII value for character
        container.innerHTML = generateHTML(keyName, keyCode, keyCharCode);
    });
});

// Function to generate HTML content
function generateHTML(key, code, keycode) {
    return `
        <div class="key-container">
            <h4>Key</h4>
            <div class="key-content">${key}</div>
        </div>
        <div class="key-container">
            <h4>Code</h4>
            <div class="key-content">${code}</div>
        </div>
        <div class="key-container">
            <h4>KeyCode</h4>
            <div class="key-content">${keycode}</div>
        </div>
    `;
}

function redirectToPortfolio() {
    window.location.href = "https://vishal-jain2003.github.io/vishaljainportfolio/";
}
