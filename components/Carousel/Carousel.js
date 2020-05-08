/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselMaker = () => {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("span");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const rightButton = document.createElement("span");

  carousel.appendChild(leftButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightButton);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  imgOne.src = ("./assets/carousel/computer.jpeg");
  imgTwo.src = ("./assets/carousel/mountains.jpeg");
  imgThree.src = ("./assets/carousel/trees.jpeg");
  imgFour.src = ("./assets/carousel/turntable.jpeg");

  leftButton.textContent = "<";
  rightButton.textContent = ">";

  const img = document.querySelectorAll(".carousel-container img");

  let direction;

  rightButton.addEventListener('click', function() {
    console.log("clicked");
    direction = "forward";
    carousel.style.justifyContent = 'flex-start';
    carousel.style.transform = 'translate(-25%)';  
  });
  
  leftButton.addEventListener('click', function() {
    console.log("clicked");
    if (direction === "forward") {
      direction = "backward";
      carousel.appendChild(carousel.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';    
    carousel.style.transform = 'translate(25%)';  
    
  });
  
  carousel.addEventListener('transitionend', function() {
    
    if (direction === "backward") {
      carousel.prepend(carousel.lastElementChild);
    } else {
      carousel.appendChild(carousel.firstElementChild);
    }
    
    carousel.style.transition = 'none';
    carousel.style.transform = 'translate(0)';
    setTimeout(() => {
      carousel.style.transition = 'all 0.5s';
    }) // Allows click to be reset. SOURCE: YouTube.
  }, false);

  return carousel;
}


const carouselNew = carouselMaker();
document.querySelector(".carousel-container").appendChild(carouselNew);


