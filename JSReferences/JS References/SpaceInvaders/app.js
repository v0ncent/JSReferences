//select our canvas element
const canvas = document.querySelector('canvas');
//get 2d canvas context
const ctx = canvas.getContext('2d');
//resize canvas to take up full width of screen
canvas.width = window.innerWidth
//resize canvas to take up full height of screen
canvas.height = window.innerHeight
//create player class
class Player {
    //create constructor
    constructor() {
        //class will also take in a velocity which is another object that has x and y coordinates associated with it
        this.velocity = {
            x: 0,
            y: 0
        }
        //add an image property of player
        const image = new Image();
        image.src = './images/spaceship.png';
        //to allow for rest of code to run we must wait for the image to load, for this we can use onload with an arrow function
        image.onload = () => {
            const scale = 0.15; //create image scale
            // when image is done loading
            this.image = image;
            //add player width and height for image
            this.width = image.width * scale; //make image .15 times smaller
            this.height = image.height * scale;
            //create position object that takes in an x and y coord
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }
    }
    //begin drawing out player with canvas
    draw() {
        //create a rectangle that is filled red, and is the size of our players parameters
        // ctx.fillStyle = 'red';
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        //draw the spaceship with parameters
        //if image loads
        if(this.image)
        ctx.drawImage(this.image, 
                      this.position.x, 
                      this.position.y, 
                      this.width, 
                      this.height);
    }
}
//create our player now that class is finshed
const player = new Player();
//create animation loop so spaceship image can be loaded
function animate() {
    window.requestAnimationFrame(animate);
    //and fill screen with black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}
animate();
