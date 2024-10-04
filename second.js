let old = false;

function openDialogue(){
    document.getElementById('full-grey-out').style.display = 'grid';
    document.getElementById('dialogue-container').style.display = 'block';
    document.getElementById('precounter').value = 0;
    resetDragPos(document.getElementById('dialogue-container'));
}

function cancelDialogue(){
    document.getElementById('full-grey-out').style.display = 'none';
    document.getElementById('dialogue-container').style.display = 'none';
    document.getElementById('precounter').value = 0;
}



function oldVersion(){
    if (!old){
        document.querySelectorAll('[data-old="true"]').forEach(function(element) {
            element.style.display = 'block';
        });
        document.querySelectorAll('[data-old="false"]').forEach(function(element) {
            element.style.display = 'none';
        });
        
    } else {
        document.querySelectorAll('[data-old="true"]').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('[data-old="false"]').forEach(function(element) {
            element.style.display = 'grid';
        });
    }
    old = !old;
}

//old version

function changeConf(amount){
    let count = parseInt(document.getElementById('precounter').value);
    count += amount;
    document.getElementById('precounter').value = count;
}

function addCount(){
   changeConf(1); 
    let amount = parseInt(document.getElementById('precounter').value);
    let currentCount = parseInt(document.getElementById('confirm-counter').innerHTML);
    currentCount += amount;
    document.getElementById('confirm-counter').innerHTML = currentCount;
    cancelDialogue();
}

document.onkeypress = function(event) {
    if (event.key === "Enter") {
        addCount();
    }
};

// Didn't work. delete soon.

// let dragBox = document.getElementById('dialogue-container');
// let currentlyDragging = false;
// let posX = 0;
// let posY = 0;

// dragBox.addEventListener('mousedown', (e) => {
//     e.preventDefault();

//     posX = e.clientX;
//     posY = e.clientY;

//     currentlyDragging = true;
// });

// document.addEventListener('mousemove', (e) => {
//     if (currentlyDragging) {
//         e.preventDefault();
//         let moveX = e.clientX;
//         let moveY = e.clientY;
        
//         dragBox.style.top = dragBox.offsetTop - (posY - moveY) + "px";
//         dragBox.style.left = dragBox.offsetLeft - (posX - moveX) + "px";

//         posX = moveX;
//         posY = moveY;
//     }
// });

// document.addEventListener('mouseup', () => {
//     currentlyDragging = false;
// });


let nowDragging = null;
let offset = [0,0];

function dragElement(){
    let element = document.getElementById('dialogue-container');
    element.style.position = "absolute";
    document.getElementById('dialogue-header').onmousedown = function(){
        nowDragging = element;
        // alert(nowDragging)
         
    }
    this.addEventListener('mousedown', (event) =>{
        const rect = nowDragging.getBoundingClientRect();
        offset[0] = event.clientX - rect.left;
        offset[1] = event.clientY - rect.bottom;
    });
}

document.onmouseup = function(){
    nowDragging = null;
}


document.onmousemove = function(move){
    let x = move.pageX;
    let y = move.pageY;

    nowDragging.style.left = x - offset[0] + "px";
    nowDragging.style.top = y - offset[1] - (130 + (window.innerHeight * 0.2476)) + "px";
}

function resetDragPos(element){
    let moveElement = element;

    moveElement.style.position = 'absolute';

    moveElement.style.left = (window.innerWidth/2 - moveElement.innerWidth/2) + "px";
    moveElement.style.top = (window.innerHeight/2 - moveElement.innerHeight/2) + "px";
}