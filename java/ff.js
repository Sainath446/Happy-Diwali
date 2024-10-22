// Wait for 2 seconds, then fade out the black screen and show the lamp light
setTimeout(() => {
    const blackScreen = document.getElementById('black-screen');
    const light = document.getElementById('light');
    const diwaliText = document.getElementById('diwali-text');
    const backgroundImage = document.createElement('div');
    
    // Add background image element
    backgroundImage.className = 'background-image';
    document.body.appendChild(backgroundImage);

    // Fade out black screen
    blackScreen.style.opacity = '0';

    // Show light expanding from the lamp
    light.style.width = '300px';
    light.style.height = '300px';
    light.style.opacity = '0.8';

    // After light animation, show "HAPPY DIWALI" slowly
    setTimeout(() => {
        diwaliText.style.opacity = '1';
        backgroundImage.style.opacity = '0.2'; // Show background image with low opacity
    }, 3000); // 3 seconds delay for light animation
}, 2000); // Initial black screen delay of 2 seconds
