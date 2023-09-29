const area = document.getElementById("area");
const item = document.getElementById("item");
console.log(item)

let gameOver = false;

function moveItem(e) {
    if (!gameOver) {
        const key =e.keyCode 
        if (key === 39) {
            const currentLeft = parseInt(item.style.left) || 0;
            item.style.left = (currentLeft + 10) + "px";
        } else if (key === 37) {
            const currentLeft = parseInt(item.style.left) || 0;
            item.style.left = (currentLeft - 10) + "px";
        } else if (key === 40) {
            const currentTop = parseInt(item.style.top) || 0;
            item.style.top = (currentTop + 10) + "px";
        } else if (key === 38) {
            const currentTop = parseInt(item.style.top) || 0;
            item.style.top = (currentTop - 10) + "px";
        }

        checkCollision();
    }
}


function checkCollision() {
    const areaRect = area.getBoundingClientRect();
    console.log(areaRect);
    const itemRect = item.getBoundingClientRect();
    console.log(itemRect);
    if ( itemRect.left < areaRect.left ||itemRect.right > areaRect.right ||itemRect.top < areaRect.top ||itemRect.bottom > areaRect.bottom)
    {
        gameOver = true;
        item.style.backgroundColor = "red";
        item.textContent = "GAME OVER";

        setTimeout(() => {
            item.style.backgroundColor = "blue";
            item.textContent = "";
            item.style.top = "10px";
            item.style.left = "10px";
            gameOver = false;
        }, 3000);
    }
}

document.addEventListener("keydown", moveItem);