$(document).ready(function() {

	console.log('testing');
	var count = 0;
	var color1;
	var color2;

	//remove class "card" to reveal background-color on click

	$('.card').on('click', function() {
		$(this).removeClass('notFlipped');
		$(this).addClass('flipped');
		color1 = $(this).attr('data-color>');
		console.log(color1);
		console.log(this);
		// count = count + 1;
		// console.log(co lor1);
		// color1 = $('.flipped').attr('data-color');
		// color2 = $('.flipped').attr('data-color');
		// check(color1,color2);
	});

	//check if two boxes have been clicked
	//if two boxes match - leave flipped
	// function check(color1,color2) {
	// 	if (count === 1) {
	// 		if(color1 === color2){
	// 			$(this).addClass('flipped');
	// 			console.log(this);
	// 		}
	// 		count = 0;
	// 		// console.log('notFlipped');
	// 	}
	// }

	// setTimeout(function(){
	// 	$(".flipped").addClass('notFlipped');
	// 	$(".notFlipped").removeClass('flipped');
	// 	},200);
	});

// });





// function unflip ()
	// $('.unflip').on('click', function() { 
	// 	// $(this).removeClass('unflip');
	// 	$(this).addClass('notFlipped');
	// });


