function changeFontEverySecond() {
    const heading = document.getElementById('changing-heading');
    heading.classList.remove('change-font')
    heading.classList.add('change-font')
  }
  
setInterval(changeFontEverySecond, 4000); // Execute every 2 seconds (half the duration of the animation)
  