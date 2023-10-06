class Rectangle {
    width
    height
    x
    y
    color
    speed

    constructor(width, height, x, y, color, speed) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y 
        this.color = color
        this.speed = speed
    }

    move() {
        this.y = this.y + this.speed
    }

    drawRect(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}