async function updateVisitorCount() {
    try {
        const response = await fetch('https://uiehb7xez0.execute-api.eu-north-1.amazonaws.com/Prod/get');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const visitorCount = data.message;

        console.log('Response:', response);
        console.log('Data:', data);


        const visitorCountElement = document.getElementById('visitor-count');
        visitorCountElement.textContent = visitorCount;
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
