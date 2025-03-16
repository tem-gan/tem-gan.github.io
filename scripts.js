// script.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "Guest"; // Default to 'Guest' if no name is provided
    document.getElementById('greeting').textContent = `You're Invited, ${name}!`;
};
