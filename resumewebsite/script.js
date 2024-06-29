async function updateVisitorCount() {
    try {
        const response = await fetch('YOUR_LAMBDA_ENDPOINT');
        const data = await response.json();
        const visitorCount = data.count;

        const visitorCountElement = document.getElementById('visitor-count');
        visitorCountElement.textContent = visitorCount;
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);