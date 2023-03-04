function changeColor() {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "black";
  
}
document.body.style.fontSize = "40px";
document.querySelector("h1").style.fontSize = "100px";
document.querySelector("h4").style.fontSize = "30px";

// Blinking effect
setInterval(function() {
	var element = document.getElementById("neon-text");
	element.style.opacity = (element.style.opacity == 0 ? 1 : 0);
}, 500);
const increaseFontSizeButton = document.getElementById('increase-font-size');
const textToIncrease = document.getElementById('text-to-increase');

increaseFontSizeButton.addEventListener('click', function() {
  // get current font size
  let fontSize = parseInt(window.getComputedStyle(textToIncrease).getPropertyValue('font-size'));
  
  // increase font size by 2px
  fontSize += 2;
  
  // set new font size
  textToIncrease.style.fontSize = fontSize + 'px';
});
