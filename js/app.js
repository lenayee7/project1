$(function() {

	console.log('testing');
	var count = 0;
	var $cardTag1;
	var color1;
	var $cardTag2;
	var color2;
	var points = 1;
	

	//get color1 & color2 then checkMatch();
	function getColorInit() {
		$('.card').on('click', function() {
			// console.log("Score:",points);

			if( count === 0 ) {
				//flip one card
				$(this).removeClass('flipped');
				$(this).attr('data-state', 'played')
				//save the color into color1
				$cardTag1 = $(this);
				color1 = $(this).attr("data-color");
				count = 1;

			} else if (count === 1 && $(this).attr("data-state")!=='played') {
				$(this).removeClass('flipped');
				$(this).attr("data-state",'played');
				//save the color into color2
				count = 2;
				$cardTag2 = $(this);
				color2 = $(this).attr("data-color");
				checkMatch();
			}
		});
	}

	function checkMatch(){
		console.log('Checking Match');
		if(color1 === color2){
			$('#score').html("You have " + points + " points");
			console.log("Got a match!", color1, color2)
			$cardTag1.off('click');
			$cardTag2.off('click');
			points ++;
			// console.log('score: ' + points);
			count = 0;
				if(points === 10) {
					alert('Yayy! Click Reset button to play again');
				}
			// remove eventlisteners from matched cards					
				
		} else {
			//flip back
			console.log("No match.. flip back")
			count = 0;
			flipBack($cardTag1,$cardTag2)
		}
	}

	function flipBack($tag1, $tag2) {
		setTimeout(function(){
			$tag1.addClass('flipped');
			$tag2.addClass('flipped');
			$tag1.attr('data-state',"");
			$tag2.attr('data-state',"");
		},200);
	}

	function resetGame() {
		$('#reset').click(function(){
			$('.card').addClass('flipped');
			points = 0;
			$('#score').html("You have " + points + " points");
			location.reload();
		});	
	}

	getColorInit();
	resetGame();

});






