function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    }
    
    const button = document.getElementById("hamburgerBtn");
    button.onclick = toggleMenu;