var context = document.getElementById('test').getContext("2d");
	
// Dimensions of the triangle
var width = 125;
var height = 100;
var padding = 20;
	
// Create a triangluar path
context.beginPath();
context.moveTo(padding + width/2, padding);
context.lineTo(padding + width, height + padding);
context.lineTo(padding, height + padding);
context.closePath();
	
// Create fill gradient
var gradient = context.createLinearGradient(0,0,0,height);
gradient.addColorStop(0, primaryColor);
gradient.addColorStop(1, secondaryColor);
	
// Add a shadow around the object
context.shadowBlur = 10;
context.shadowColor = "black";
	
// Stroke the outer outline
context.lineWidth = lineWidth * 2;
context.lineJoin = "round";	
context.strokeStyle = gradient;
context.stroke();
	
// Turn off the shadow, or all future fills will have shadows
context.shadowColor = "transparent";
	
// Fill the path
context.fillStyle = gradient;
context.fill();

// Add a horizon reflection with a gradient to transparent
gradient=context.createLinearGradient(0,padding,0,padding+height);
gradient.addColorStop(0, "transparent");
gradient.addColorStop(0.5, "transparent");
gradient.addColorStop(0.5, tertiaryColor);
gradient.addColorStop(1, secondaryColor);

context.fillStyle = gradient;
context.fill();
	
// Stroke the inner outline
context.lineWidth = lineWidth;
context.lineJoin = "round";	
context.strokeStyle = "#333";
context.stroke();