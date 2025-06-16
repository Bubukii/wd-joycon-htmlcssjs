const displayArea = document.getElementById('displayArea');
    const upButton = document.getElementById('button up');
    const downButton = document.getElementById('button down');
    const leftButton = document.getElementById('button left');
    const rightButton = document.getElementById('button right');

    
    function updateDisplay(buttonText) {
        displayArea.textContent = buttonText;
    }

  
    upButton.addEventListener('click', function() {
        updateDisplay(upButton.textContent);
    });
    downButton.addEventListener('click', function() {
        updateDisplay(downButton.textContent);
    });
    leftButton.addEventListener('click', function() {
        updateDisplay(leftButton.textContent);
    });
    rightButton.addEventListener('click', function() {
        updateDisplay(rightButton.textContent);
    });
   
