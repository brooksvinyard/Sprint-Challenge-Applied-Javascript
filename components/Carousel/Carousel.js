class Carousel {
    constructor(element) {
        this.element = element;
        
        // Get the right and left buttons
        this.rightButton = this.element.querySelector('.right-button');
        this.leftButton = this.element.querySelector('.left-button');
        this.imageNodeList = this.element.querySelectorAll('.carousel img');

        // Set the first image to be the current one
        this.imageSelected = 0;
        
        // Add a click handler to the buttons
        this.rightButton.addEventListener('click', () => { this.goRight() });
        this.leftButton.addEventListener('click', () => { this.goLeft() });
      }
          
      goRight() {      
        if (this.imageSelected < this.imageNodeList.length-1) {
            //Turn off the current image
            this.imageNodeList[this.imageSelected].style.display = "none";

            // Increment the NodeList and Turn on the next image
            this.imageSelected = this.imageSelected + 1;
            this.imageNodeList[this.imageSelected].style.display = "flex";
        }
        else {
            //Turn off the current image
            this.imageNodeList[this.imageSelected].style.display = "none";

            // Reset the NodeList and Turn on the first image
            this.imageSelected = 0;
            this.imageNodeList[0].style.display = "flex";
        }

      }

      goLeft() {
        if (this.imageSelected == 0) {
            //Turn off the current image
            this.imageNodeList[this.imageSelected].style.display = "none";

            // Increment the NodeList and Turn on the next image
            this.imageSelected = this.imageNodeList.length-1
            this.imageNodeList[this.imageSelected].style.display = "flex";
        }
        else {
            //Turn off the current image
            this.imageNodeList[this.imageSelected].style.display = "none";

            // Reset the NodeList and Turn on the first image
            this.imageSelected = this.imageSelected - 1;
            this.imageNodeList[this.imageSelected].style.display = "flex";
        }
      }

}

let carousel = document.querySelectorAll('.carousel');

// Sets the first image to be shown
document.querySelector('.carousel img').style.display = "flex";

carousel.forEach( e => { new Carousel(e) } );
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/