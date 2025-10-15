document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        message.textContent = `Vous avez cliqué ${clickCount} fois !`;
        
        // Animation simple
        message.style.transform = 'scale(1.2)';
        setTimeout(() => {
            message.style.transform = 'scale(1)';
        }, 200);
    });
});
