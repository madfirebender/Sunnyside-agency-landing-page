function toggleContent() {
    var content = document.querySelector("ul.nav");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}