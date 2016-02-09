$(function() {
	
	$('#hide').hide();
	
	var getName = prompt('What is your name?');
	getName = getName.toUpperCase();
	newString = 'Let\'s go '+ getName + ' !!!';
  $('h1').css("color","yellow");
	$('h1').text(newString);

  playerName =  ('Yayy ' + getName + ' !!!' + ' Time to eat some M&M\'s!');
			
	console.log('testing');
	//create color array * 2
	var colors = ["red","green","blue","orange","purple","brown","silver","teal","yellow","darkblue"];
	colors = colors.concat(colors);
	//create an images array * 2
	// var images = ["red","green","blue","orange","purple","brown","silver","teal","yellow","darkblue"];
	// images = images.concat(images);
	//randomized colors
	colors = shuffleArray(colors);
	//created divs for each color & appended to #gameBoard
	var boardHTML = '';
	for (var i = 0; i < colors.length; i++) {
		var str = '<div class="card flipped ' + colors[i] +'" data-color="' + colors[i] + '"></div>';
		// console.log(colors[i]);
		// console.log(str);
		boardHTML += str
	}

	$('#gameBoard').append(boardHTML);
		// console.log(boardHTML);
	var count = 0;
	var $cardTag1;
	var color1;
	var $cardTag2;
	var color2;
	var points = 1;

	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    	}
    	 return array;
	}

//start game 
	glow = $('.glow');
	setInterval(function(){
	  glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
		}, 1000);


	function startGame() {
			
		$('#play').one('click', function(timer){
			$(this).addClass('no-glow');
		
			$('#instructions').hide();
			// console.log($(this))
			getColorInit();

			var count=60;
			var counter = setInterval(timer, 1000);
			function timer() {
			  count = count - 1;
			  console.log(count);
			  $('#timer').text('Timer - ' + count + ' secs');
			  	if (points === 11 && count > 0) {
			  		console.log('you did it!!');
			  		clearInterval(counter);
			  	}
					  if (count <= 0) {
				  		console.log('You lose!');
				  		clearInterval(counter);
				  		$('#gameBoard').hide();
			     		$('#hide').show();
					  }
					  	// if (cheat === 'stop timer') {
					  	// 	console.log(cheat)
					  	// 	console.log('cheating');
					  	// 	cheatGame();
					  	// }
			  	return;  	
			  }
		});
	}

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
		// console.log('Checking Match');
		if(color1 === color2){
			$('#score').html("You have " + points + " points");
			// console.log("Got a match!", color1, color2)
			$cardTag2.off('click');
			$cardTag2.off('click');
			points ++;
			// console.log('score: ' + points);
			count = 0;
				if(points === 11) {
					alert(playerName);
				}
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
		},300);
	}

	function resetGame() {
		$('#reset').click(function(){
			$('.card').addClass('flipped');
			points = 0;
			$('#score').html("You have " + points + " points");
			location.reload();
		});	
	}

	// function cheatGame() {
	// 	console.log('cheating');
	// 	points = 11;
	// 	$('.card').removeClass('flipped');
	// 	clearInterval();
	// }

	startGame();
	resetGame();
	// cheatGame()

});






