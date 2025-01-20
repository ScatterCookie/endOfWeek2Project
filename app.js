let displayImage = document.getElementById("main-img-display");
let displayText = document.getElementById("img-description");
let thumbnailContainer = document.getElementById("thumbnail-container");
let currentImageIndex = 0;
const displayElement = document.getElementById("display");

const images = [
  {
    image: "image01.jpg",
    thumbnail: "image01.jpg",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img1",
  },
  {
    image: "image02.jpeg",
    thumbnail: "image02.jpeg",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img2",
  },
  {
    image: "image03.jpg",
    thumbnail: "image03.jpg",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img3",
  },
  {
    image: "image04.jpeg",
    thumbnail: "image04.jpeg",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img4",
  },
  {
    image: "image05.jpeg",
    thumbnail: "image05.jpeg",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img5",
  },
  {
    image: "image06.png",
    thumbnail: "image06.png",
    alt: "Sunset by teh sea",
    description: "A sea side sunset looking out to the vast unknown",
    id: "img6",
  },
];

function init() {
  createThumbnails();
  setImageAndDescriptionDisplay(images, currentImageIndex);
}

function setImageAndDescriptionDisplay(array, index) {
  if (index < 0) index = array.lenth - 1;
  if (index > array.length - 1) index = 0;
  displayImage.setAttribute("src", array[index].image);
  displayImage.setAttribute("alt", array[index].alt);
  displayText.innerHTML = array[index].description;
  currentImageIndex = index;
}

function createThumbnails() {
  for (let image of images) {
    let thumbnail = document.createElement("img");

    thumbnail.setAttribute("src", image.image);
    thumbnail.setAttribute("alt", image.alt);
    thumbnail.setAttribute("tabindex", "0");
    thumbnail.classList.add("thumb-image");
    thumbnailContainer.appendChild(thumbnail);

    const matchImageId = (element) => element.id == image.id;
    thumbnail.addEventListener("click", function () {
      currentImageIndex = images.findIndex(matchImageId);
      setImageAndDescriptionDisplay(images, currentImageIndex);
    });
    thumbnail.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        currentImageIndex = images.findIndex(matchImageId);
        setImageAndDescriptionDisplay(images, currentImageIndex);
      }
    });
  }

  let next = document.querySelector("#next");
  next.textContent = "⋙";
  next.addEventListener("click", function () {
    setImageAndDescriptionDisplay(images, ++currentImageIndex);
  });
  let previous = document.querySelector("#previous");
  previous.textContent = "⋘";
  previous.addEventListener("click", function () {
    setImageAndDescriptionDisplay(images, --currentImageIndex);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      setImageAndDescriptionDisplay(images, ++currentImageIndex);
    }
    if (event.key === "ArrowLeft") {
      setImageAndDescriptionDisplay(images, --currentImageIndex);
    }
  });
}

window.onload = init;
