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

document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseStudies = document.querySelectorAll('.case-study');
  
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const filterValue = btn.dataset.filter;
  
        caseStudies.forEach(caseStudy => {
          if (filterValue === 'all' || caseStudy.classList.contains(filterValue)) {
            caseStudy.style.display = 'block';
          } else {
            caseStudy.style.display = 'none';
          }
        });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("my-image");
    const changeImageButton = document.getElementById("change-image-btn");

    // Array of image URLs
    const imageUrls = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    let currentIndex = 0;

    // Function to change the image
    function changeImage() {
        imageElement.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    // Change image on button click
    changeImageButton.addEventListener("click", changeImage);

    // Initially set the first image
    changeImage();
});

  
  