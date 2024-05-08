// Optional JavaScript for interactivity or dynamic content
document.addEventListener("DOMContentLoaded", function() {
    // You can change this image URL to your desired image
    var imageUrl = "https://via.placeholder.com/300";
  
    var portfolioImage = document.getElementById("photographer-image.jpg");
    portfolioImage.src = imageUrl;
  });
  // Example: Change email and phone number onclick
document.getElementById("email").onclick = function() {
    this.innerHTML = "new@example.com";
};

document.getElementById("phone").onclick = function() {
    this.innerHTML = "987-654-3210";
};
// Define an array of image URLs for your project
const projectImages = [
    "deroo.png",
    "image2.jpg",
    "image3.jpg"
];

// Get references to HTML elements
const projectImage = document.getElementById("projectImage");
const changeImageButton = document.getElementById("changeImageButton");

// Function to change the image
function changeImage() {
    // Generate a random index to select a random image from the array
    const randomIndex = Math.floor(Math.random() * projectImages.length);
    const randomImage = projectImages[randomIndex];
    // Change the src attribute of the projectImage element
    projectImage.src = randomImage;
}

// Add click event listener to the button
changeImageButton.addEventListener("click", changeImage);

// Call changeImage function on page load to display an initial image
changeImage();

  