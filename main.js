var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {

		body_background.scaleToWidth(900);
		body_background.scaleToHeight(500);
		body_background.set({
		top:0,
		left:0
		});
		canvas.add(body_background);
		});
	
}

function playSound(){
	x.play();
}
