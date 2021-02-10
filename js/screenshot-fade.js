window.onload = rotate;
    
var screenshotIdx = 0;
var screenshots = new Array("img/4.png","img/1.png","img/2.png","img/3.png");

function rotate() {
  var screenshot = document.getElementById("screenshot-image")
  screenshotIdx++;
     if (screenshotIdx == screenshots.length) {
      screenshotIdx = 0;
     }

     screenshot.src = screenshots[screenshotIdx];
     setTimeout(rotate, 2 * 1000);
}

// Native fadeOut
function fadeOut(ms) {
  var screenshot = document.getElementById("screenshot-image")
  if (ms) {
    let opacity = 1;
    const timer = setInterval(function() {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
      }
      screenshot.style.opacity = opacity;
    }, 50);
  }
  else {
    screenshot.style.opacity = '0';
  }
}

// Native fadeIn
function fadeIn(ms) {
  var screenshot = document.getElementById("screenshot-image")
  screenshot.style.opacity = 0;

  if (ms) {
    let opacity = 0;
    const timer = setInterval(function() {
      opacity += 50 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      screenshot.style.opacity = opacity;
    }, 50);
  } else {
    screenshot.style.opacity = 1;
  }
}