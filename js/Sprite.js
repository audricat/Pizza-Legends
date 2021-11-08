class Sprite {
    constructor(config) {
    
    //Set up Image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
        this.isLoaded = true;
    }

    //Shadow
    this.shadow = new Image();
    this.useShadow = true; //config.useShadow || false
    if (this.useShadow) {
        this.shadow.src = "../images/characters/shadow.png"
     } 
    this.shadow.onload = () => {
        this.isShadowLoaded = true;
    }
   

    //Configure Animation & Initial State
    this.animation = config.animations || {
        idledown: [
            [0,0]
        ]
    }
    this.currentAnimation = config.currentAnimation || "idledown";
    this.currentAnimationFrame = 0;
    

    //Reference the game Object
    this.gameObject = config.gameObject;
    
    }

    //Draw method
    draw(context) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && context.drawImage(this.shadow, x, y)
        this.isLoaded && context.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }
}
