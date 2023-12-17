function openPopup(topic) {
    document.getElementById("popup" + topic.charAt(0).toUpperCase() + topic.slice(1)).style.display = "flex";
}

function closePopup(topic) {
    document.getElementById("popup" + topic.charAt(0).toUpperCase() + topic.slice(1)).style.display = "none";
}