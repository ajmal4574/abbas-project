
// visiter count start
const visitorCountElement = document.getElementById('visitor-count');
let visitorCount = localStorage.getItem('visitorCount');
if (!visitorCount) {
    visitorCount = 0;}
    visitorCount = parseInt(visitorCount) + 1;

    localStorage.setItem('visitorCount', visitorCount);
visitorCountElement.textContent = `Visitors: ${visitorCount}`;

// visiter count end