const _loaderStart = Date.now();

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

// Hide the loader after all resources are loaded, but keep it visible at least 3s
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const minDuration = 3000; // ms
    const elapsed = Date.now() - _loaderStart;
    const wait = Math.max(0, minDuration - elapsed);

    setTimeout(() => {
        // trigger fade-out
        loader.classList.add('hidden');
        // remove from DOM after CSS transition (400ms) + buffer
        setTimeout(() => {
            if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
        }, 500);
    }, wait);
});
