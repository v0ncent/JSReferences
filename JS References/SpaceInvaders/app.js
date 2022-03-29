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
        //add rotation property
        this.rotation = 0;
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
    //drawing out player with canvas method
    draw() {
        ctx.save();
        ctx.translate(player.position.x + player.width /2, player.position.y + player.height /2);
        ctx.rotate(this.rotation);
        ctx.translate(-player.position.x - player.width /2, -player.position.y - player.height /2);
        //draw the spaceship with parameters
        ctx.drawImage(this.image, 
                      this.position.x, 
                      this.position.y, 
                      this.width, 
                      this.height);
        ctx.restore();
    }
    //create update method for updating where player is when moving
    update(){
        //if image loads
        if(this.image){
            this.draw();
            this.position.x += this.velocity.x;
        }
    }
}
//create projectile class
class Projectile{
    constructor({positio }){
        this.position
    }
}
//create our player now that class is finshed
const player = new Player();
//create keys object to monitor all the keys being pressed
const keys = {
    //each key is an individual object that is equal to false defaultly
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
};
//create animation loop so spaceship image can be loaded
function animate() {
    window.requestAnimationFrame(animate);
    //and fill screen with black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    //if key is pressed
    if (keys.a.pressed && player.position.x >= 0){
        player.velocity.x = -5;
        player.rotation = -.15;
    }else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = 5;
        player.rotation = .15;
    }else{ // if not pressed
        player.velocity.x = 0;
        player.rotation = 0;
    }
}
animate();
//add keydown event listener for player movement
addEventListener('keydown', ({key}) =>{
    //create switch block to create controls
    switch(key){
        case 'a':
            console.log('left');
            keys.a.pressed = true;
            break;
        case 'd':
            console.log('right');
            keys.d.pressed = true;
            break;
        case ' ': //spacebar
            console.log('shooting');
            keys.space.pressed = true;
            break;
    }
});
//create key up event listener to set keys to false
addEventListener('keyup', ({key}) =>{
    //create switch block to create controls
    switch(key){
        case 'a':
            console.log('left');
            keys.a.pressed = false;
            break;
        case 'd':
            console.log('right');
            keys.d.pressed = false;
            break;
        case ' ': //spacebar
            console.log('shooting');
            keys.space.pressed = false;
            break;
    }
});