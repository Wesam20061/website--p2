function toonVerberg(elementId) {
    // Verberg alle tekstgedeelten
    verbergAlleTeksten();

    // Toon of verberg het geselecteerde tekstgedeelte
    var tekstElement = document.getElementById(elementId);
    tekstElement.style.display = (tekstElement.style.display === "none") ? "block" : "none";
}

function verbergAlleTeksten() {
    // Verberg alle tekstgedeelten
    for (var i = 1; i <= 6; i++) {
        var huidigTekstElement = document.getElementById('tekst' + i);
        if (huidigTekstElement) {
            huidigTekstElement.style.display = "none";
        }
    }
}