const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    const circle = document.createElement("span");
    circle.classList.add('circle');
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    this.appendChild(circle);
    
    setTimeout(() => {
      circle.remove()
    }, 500);
  });
});