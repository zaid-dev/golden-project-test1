class Block{
    constructor(x,y,width){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 20;
        
    }

    display(){
        rect(this.x,this.y,this.width,this.height)
    }
}