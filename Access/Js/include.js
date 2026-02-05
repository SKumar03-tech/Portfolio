function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

// Layout components
loadComponent("navbar", "modules/navbar.html");
loadComponent("footer", "modules/footer.html");

// Page sections
loadComponent("header", "modules/header.html");
loadComponent("projects", "modules/projects.html");
loadComponent("about_me", "modules/about.html");
loadComponent("certificates", "modules/certificate.html");
loadComponent("contact_me", "modules/contact.html");

// Wait until modules are loaded
document.addEventListener("click", function(e) {
    if (e.target && e.target.id === "menu-toggle") {
        document.getElementById("nav-menu").classList.toggle("active");
    }
});