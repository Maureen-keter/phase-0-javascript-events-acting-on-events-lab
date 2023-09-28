const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
    
  function moveDodgerRight() {

    const dodger = document.getElementById('dodger');

    const currentPosition = parseInt(dodger.style.left) || 0; 

    const moveAmount = 10;

    const newPosition = currentPosition + moveAmount;

    dodger.style.left = newPosition + 'px';
  }
