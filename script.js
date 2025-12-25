// Select the button and heading
const button = document.getElementById('changeBtn');
const title = document.getElementById('title');

// Add click event to change color
button.addEventListener('click', () => {
    title.style.color = title.style.color === 'red' ? 'blue' : 'red';
});
