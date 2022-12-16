const dropdownButtons = document.querySelectorAll(".dropdown-btn");
const mobileNav = document.querySelector(".mobile-nav");
const hideMenuBtn = document.querySelector(".close-menu-btn");
const showMenuBtn = document.querySelector(".menu-btn");

const toggleSublinks = (dropdownBtn, i) => {
  const subLink = dropdownBtn.nextElementSibling;

  if (!dropdownBtn.parentElement.classList.contains("open")) {
    subLink.style.maxHeight = `${subLink.scrollHeight + 32}px`;
    subLink.style.opacity = "1";
    subLink.style.visibility = "visible";
  } else {
    subLink.style.maxHeight = "0px";
    subLink.style.opacity = "0";
    subLink.style.visibility = "hidden";
  }

  dropdownButtons.forEach((button, index) => {
    if (i !== index) {
      const subLink = button.nextElementSibling;
      button.parentElement.classList.remove("open");
      if (subLink) {
        subLink.style.maxHeight = "0px";
        subLink.style.opacity = "0";
        subLink.style.visibility = "hidden";
      }
    }
  });

  dropdownBtn.parentElement.classList.toggle("open");
};

dropdownButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleSublinks(button, index);
  });
});

showMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("visible");
});

hideMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("visible");
});

mobileNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("visible")) {
    mobileNav.classList.remove("visible");
  }
});
