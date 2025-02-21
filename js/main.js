const homeLink = document.getElementById("home-link");
const worksLink = document.getElementById("works-link");
const contactLink = document.getElementById("contact-link");

// Used chatGBT to learn about the hoverColor,originalColor function
// Function to add hover effect with a custom color
function addHoverEffect(element, hoverColor, originalColor) {
  element.addEventListener("mouseover", function () {
    this.style.color = hoverColor;
  });

  element.addEventListener("mouseout", function () {
    this.style.color = originalColor;
  });
}

// Apply hover effects to each link with different colors
addHoverEffect(homeLink, "red", "black");
addHoverEffect(worksLink, "blue", "black");
addHoverEffect(contactLink, "green", "black");
