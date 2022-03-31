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
class Projectile{//constructor will need to take in a position and velocity when class gets instantiated
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.radius = 3; //just set radius to 3
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2); //to create cirlce we haft to use the canvas method arc sinve there is no cirlce method
        //to get around a full circle is 2pi so we set the start of the arc to 0 then the end is 2pi
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
    //method for updating image position when moved
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
//create invader class which is a copy and paste of spaceship or player with few changes
class Invader {
    //create constructor
    constructor({position}) {
        //class will also take in a velocity which is another object that has x and y coordinates associated with it
        this.velocity = {
            x: 0,
            y: 0
        }
        //add an image property of player
        const image = new Image();
        image.src = './images/invader.png';
        //to allow for rest of code to run we must wait for the image to load, for this we can use onload with an arrow function
        image.onload = () => {
            const scale = 1; //create image scale
            // when image is done loading
            this.image = image;
            //add invader width and height for image
            this.width = image.width * scale; //make image to its own size
            this.height = image.height * scale;
            //create position object that takes in an x and y coord
            this.position = {
                x: position.x,
                y: position.y / 2
            }
        }
    }
    //drawing out invader with canvas method
    draw() {
        ctx.drawImage(this.image, 
                      this.position.x, 
                      this.position.y, 
                      this.width, 
                      this.height);
    }
    //create update method for updating where invader is when moving
    update(){
        //if image loads
        if(this.image){
            this.draw();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
}
//create grid class to house invaders
class Grid {
    //create constructor for paremeters we want class to take in
    constructor(){
        this.position = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x:0,
            y:0
        };
        //whenever this class is instantiated we create a new array of the invader class/object
        this.invaders = [];

        //create rows and columns of invaders
        for (let x = 0; x < 10; x++){ //create 10 
        for (let y = 0; y < 10; y++){
            this.invaders.push(new Invader({position:{
                x: x * 30,//multiply iterator by 30 to space out each invader 
                y: y * 30
            }}));
        }
    }
}

    update(){ }
}
//create our player now that class is finshed
const player = new Player();
//create projectiles array
const projectiles = [];
//create our grid class
const grids = [new Grid()];
new Projectile({
    position:{
        x: 300,
        y: 300
    },
    velocity: {
       x: 0,
       y: -5 
    }
});
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
    //update player position
    player.update();
    //update projectile position with a forEach method 
    projectiles.forEach((projectile, index) => {
        //if projectile is off screen
        if(projectile.position.y + projectile.radius <= 0){
            setTimeout(()=>{
                projectiles.splice(index, 1) //remove it from the array
            }, 0);
        }else{
            projectile.update();
        }
    });
    grids.forEach(grid => {
        grid.update();
        grid.invaders.forEach(invader => {
            invader.update();
        })
    })
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
            //when space is pushed down push a new projectile class into the projectiles array
            projectiles.push(new Projectile({
                position:{
                    x: player.position.x + player.width / 2,//add width /2 to have projectiles come from center of space ship
                    y: player.position.y
                },
                velocity: {
                   x: 0,
                   y: -15
                }
            }));
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