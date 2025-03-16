// script.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "......"; // Default to 'Guest' if no name is provided
    document.getElementById('greeting').innerHTML = `Эрхэм хүндэт, <i>${name}</i> таныг "Инээд эмчилгээ" цуврал номын нээлтэд хүрэлцэн ирэхийг урьж байна.`;
};
