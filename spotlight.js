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

var titles = ["Evidence Marker", "Drugs", "Fingerprints", "Documents", "Footprints", "Blood Spatter", "Victim's Body", "Murder Weapon: Firearm"];

var explanations = ["Evidence Markers are use to document the evidence at a crime scene. This is especially crucial at large crime scenes where there is lots of evidence to process.", "This could have been a drug deal gone wrong. We will need to identify the pills in this bottle back at the forensics lab.", "Fingerprints are specific too each and every person on earth. We can use fingerprints to match a suspect to place them at the crime scene.", "We don't know the contents of these documents but they seem to be important. We will have an investigator review them later.", "This blood spatter indicates the victim sustained some sort of terminal injury. We will have to preform an autopsy to confirm the cause of death.", "Using the victims ID we can form connections to people who may have been involved in the victim's murder or have important information."]

var photos = ["<img src='marker1.png'>", "<img src='drugs.png'>", "<img src='prints.png'>", "<img src='documents.png'>", "<img src='footprints.png'>", "<img src='blood.png'>", "<img src='body.png'>", "<img src='weapon.png'>"]

function popUp(n) {
    document.getElementById("evidence").innerHTML = titles[n];
    // document.getElementById("").innerHTML = explanations;
    // document.getElementById("").innerHTML = photos;
}