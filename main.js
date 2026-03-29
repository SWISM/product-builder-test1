document.addEventListener('DOMContentLoaded', () => {
    const lottoContainer = document.getElementById('lotto-container');
    const generateBtn = document.getElementById('generate-btn');

    function generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        lottoContainer.innerHTML = '';
        for (const number of numbers) {
            const ball = document.createElement('div');
            ball.className = 'lotto-ball';
            ball.textContent = number;
            lottoContainer.appendChild(ball);
        }
    }

    generateBtn.addEventListener('click', () => {
        const numbers = generateNumbers();
        displayNumbers(numbers);
    });

    // Initial generation
    const initialNumbers = generateNumbers();
    displayNumbers(initialNumbers);
});