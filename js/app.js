$(document).ready(function() {
	console.log('testing');
	var count = 0;
	var $cardTag1;
	var color1;
	var $cardTag2;
	var color2;
	var points=0;
		//remove class "card" to reveal background-color on click

		// function playGame() {
		// 	$('#playButton').one('click',function()

			

	function getColorInitialize() {

		$('.card').click(function() {
			console.log("Score:",points);
			if( count === 0 ) {
				//flip the card
				$(this).removeClass('flipped');
				$(this).attr('data-state', 'played')
				//save the color into temp
				$cardTag1=$(this);
				color1 = $(this).attr("data-color");
				count = 1;
			} else if (count === 1 && $(this).attr("data-state")!=='played') {
				$(this).removeClass('flipped');
				$(this).attr("data-state",'played');
				//save the color into temp 2
				count = 2;
				$cardTag2=$(this);
				color2 = $(this).attr("data-color");
				checkMatch();
			}
		});
	}
	//      if (color1 === color2) {
			 // $(this).removeClass('flipped');
		// 		console.log('Pair');
		// 		count = 0;
			// }
		// } else {
		// 	$(this).addClass('flipped');
		// 	count = 0;
			// $('.card').addClass('flipped')

				//TODO: keep card open (unable to flip back)
				// $(this).removeClass('flipped');

	function checkMatch(){
		console.log('Checking Match');
		if(color1 === color2){
			console.log("Got a match!", color1, color2)
			// $(this).removeClass('flipped');
			points++;
			count = 0;
		// return true
		} else {
			console.log("No match.. flip back")
			// $(this).addClass('flipped');
			count = 0;
			flipBack($cardTag1,$cardTag2);
			// setTimeout(function() {
			// 	$('.card').addClass('flipped');
			// }, 600);
		// return false
		}
	}


	function flipBack($tag1, $tag2) {
		setTimeout(function(){
			$tag1.addClass('flipped');
			$tag2.addClass('flipped');
			$tag1.attr('data-state',"");
			$tag2.attr('data-state',"");
		},500);
	}

		
		// playGame();
		getColorInitialize();
});





