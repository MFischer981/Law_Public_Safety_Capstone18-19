window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 120px, rgba(0, 0, 0, 0.75) 160px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 120px, rgba(0, 0, 0, 0.75) 160px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 120px, rgba(0, 0, 0, 0.75) 160px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }
});

var titles = ["Evidence Marker", "Drugs", "Fingerprints", "Document", "Footprints", "Blood Spatter", "Victim's Body", "Murder Weapon: <br> Beretta 8000", "Wallet"];

var desc = [
// Evidence Markers
"Evidence Markers are use to document the evidence at a crime scene. This is especially crucial at large crime scenes where there is lots of evidence to process.", 
// Drugs
"This could have been a drug deal gone wrong. We will need to identify the pills in this bottle back at the forensics lab.", 
// Fingerprints
"Fingerprints are specific to each and every person on earth. We can use fingerprints to match a suspect to place them at the crime scene.",
// Document 
"This small sheet of notepad contains a phone number attached to a name. We cam run the name and number through our database to help track down a possible witness or suspect.",
// Shoe Print 
"This shoe print could help us identify the footwear that a suspect or witness was wearing. We will have to run the footprint against our database.",
// Blood Spatter 
"This blood spatter indicates the victim sustained some sort of terminal injury. We will have to preform an autopsy to confirm the cause of death.",
// Victim IDs
"Using the victims ID we can form connections to people who may have been involved in the victim's murder or have important information.", 
// Handgun
"This is a possible murder weapon. We will have to run a ballistics test on the gun to determine wether or not it is a murder weapon",
// Wallet
"The victim's wallet is still at the crime scene which proves to us this was not a mugging or robbery. Also whoever our victim is he is carrying way to much cash."]

var photos = ["<img id='picture' src='marker.png'>", "<img id='picture' src='drugs.png'>", "<img id='picture' src='prints.png'>", "<img id='picture' src='documents.png'>", "<img id='picture' src='footprint.png'>", "<img id='picture' src='blood.png'>", "<img id='picture' src='body.png'>", "<img id='picture' src='weapon.png'>", "<img id='picture' src='wallet.png'>"]

function popUp(n) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("evidence").innerHTML = titles[n];
    document.getElementById("description").innerHTML = desc[n];
    document.getElementById("picture").outerHTML = photos[n];
}

function closeWindow() {
    console.log("close");
    document.getElementById("popup").style.display = "none";
}

