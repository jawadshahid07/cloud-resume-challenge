async function updateVisitorCount() {
    try {
        const visitorCountElement = document.getElementById('visitor-count-value');

        const response = await fetch('https://2629zq9ael.execute-api.eu-north-1.amazonaws.com/Prod/visitorcount');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const visitorCount = data.visitorCount; 

        visitorCountElement.textContent = visitorCount;
    } catch (error) {
        console.error('Error updating visitor count:', error);
        const visitorCountElement = document.getElementById('visitor-count');
        visitorCountElement.textContent = 'Visitor Count: Error loading data';
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
