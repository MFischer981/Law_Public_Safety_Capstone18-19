window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 80px, rgba(0, 0, 0, 0.95) 100px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 60px, rgba(0, 0, 0, 0.95) 80px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 80px, rgba(0, 0, 0, 0.95) 100px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }
});

