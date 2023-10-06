let rect1 = new Rectangle(30, 30, 100, 30, "red", 5)
let rect3 = new Rectangle(30, 30, 250, 30, "red", 6)
let rect4 = new Rectangle(30, 30, 400, 30, "red", 4)
let rect5 = new Rectangle(30, 30, 550, 30, "red", 7)
let rect2 = new Rectangle(30, 30, 20, 230, "blue")

let arr = [rect1, rect3, rect4, rect5]

let ctx = document.getElementById("canvas").getContext("2d")
let demo 

function run() {
    ctx.clearRect(0, 0, 800, 500)
    for (let i = 0; i < arr.length; i++) {
        if(isCollision(arr[i], rect2)) {
            stop()
            alert("Đã va chạm")
            return
        }
        arr[i].move()
        checkPosition(arr[i])
        arr[i].drawRect(ctx)
    } 
    rect2.drawRect(ctx)
}

function start() {
    demo = setInterval(run, 20)
}

function stop(){
    clearInterval(demo)
}

function checkPosition(rect) {
    if (rect.y > 450 || rect.y < 20) {
        rect.speed = -rect.speed
    }
}

function moveRect2(e) {
    switch(e.keyCode) {
        case 87:
            moveUp(rect2)
            break
        case 83:
            moveDown(rect2)
            break
        case 65:
            moveLeft(rect2)
            break
        case 68:
            moveRight(rect2)
            break
    }
}

document.addEventListener("keydown", moveRect2)

function moveUp(rect) {
    rect.y = rect.y - 5
}
function moveDown(rect) {
    rect.y = rect.y + 5
}
function moveLeft(rect) {
    rect.x = rect.x - 5
}
function moveRight(rect) {
    rect.x = rect.x + 5
}

function isCollision(rect1, rect2) {
    let distX = (rect1.x + (rect1.width/2)) - (rect2.x + (rect2.width)/2);
    if (distX < 0)
        distX = -distX;

    const distW = (rect1.width + rect2.width)/2;

    let distY =(rect1.y + (rect1.height/2)) - (rect2.y + (rect2.height)/2);
    if(distY < 0)
        distY = -distY;

    const distH = (rect1.height + rect2.height)/2;

    return (distX < distW && distY < distH);
}