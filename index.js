const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const rightNumber = dodger.style.left.replace('px', '');
    const right = parseInt(rightNumber, 10);
    console.log(right);

    if (right < (400 - 40)) {
    dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }

    if(e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }

    
});