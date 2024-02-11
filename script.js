function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the "open" class on the menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Close the menu when a link is clicked
  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      icon.classList.remove("open");
    });
  });
}
