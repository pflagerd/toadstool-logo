const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Get the image element
const img = document.getElementById('toadstool-logo');

// Set canvas dimensions to match image
canvas.width = img.width;
canvas.height = img.height;

// First draw the image as the background
ctx.drawImage(img, 0, 0);

// Now add annotations on top of the image
function addAnnotations() {
    // Example: Add a rectangle highlight
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 100, 100);

    // Example: Add text label
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillRect(150, 150, 150, 30); // Text background
    ctx.fillStyle = 'black';
    ctx.fillText('Important feature', 155, 170);

    // Example: Add an arrow
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(250, 150);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add circle highlight
    ctx.beginPath();
    ctx.arc(350, 250, 40, 0, Math.PI * 2);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

// Make sure to wait for the image to load
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    addAnnotations();
}

// If image is already loaded
// addAnnotations();