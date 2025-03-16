// script.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "Эрхэм хүндэт зочин"; // Default to 'Guest' if no name is provided
    document.getElementById('greeting').textContent = `Эрхэм хүндэт, ${name} таныг "инээд эмчилгээ" цуврал номын нээлтэнд хүрэлцэн ирэхийг урья.`;
};
