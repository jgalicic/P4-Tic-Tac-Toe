(function() {
	function ticTacToe() {
		$( document ).ready(function() {

			// VARIABLE DECLARATIONS

			const player1 = document.querySelector('#player1');
			const player2 = document.querySelector('#player2');

			const box = $('.box');

			let turnNumber = 0;
			let gameHasEnded = false;

			function checkIfSomebodyWon() {
				   // O Across
				if ($(box[0]).hasClass("box-filled-1") && $(box[1]).hasClass("box-filled-1") && $(box[2]).hasClass("box-filled-1")) {
					oWins();
				}
				else if ($(box[3]).hasClass("box-filled-1") && $(box[4]).hasClass("box-filled-1") && $(box[5]).hasClass("box-filled-1")) {
					oWins();
				}
				else if ($(box[6]).hasClass("box-filled-1") && $(box[7]).hasClass("box-filled-1") && $(box[8]).hasClass("box-filled-1")) {
					oWins();
				}  // O Vertically
				else if ($(box[0]).hasClass("box-filled-1") && $(box[3]).hasClass("box-filled-1") && $(box[6]).hasClass("box-filled-1")) {
					oWins();
				}
				else if ($(box[1]).hasClass("box-filled-1") && $(box[4]).hasClass("box-filled-1") && $(box[7]).hasClass("box-filled-1")) {
					oWins();
				}
				else if ($(box[2]).hasClass("box-filled-1") && $(box[5]).hasClass("box-filled-1") && $(box[8]).hasClass("box-filled-1")) {
					oWins();
				}   // O Diagonally
				else if ($(box[0]).hasClass("box-filled-1") && $(box[4]).hasClass("box-filled-1") && $(box[8]).hasClass("box-filled-1")) {
					oWins();
				}
				else if ($(box[2]).hasClass("box-filled-1") && $(box[4]).hasClass("box-filled-1") && $(box[6]).hasClass("box-filled-1")) {
					oWins();
				}   // X Across
				else if ($(box[0]).hasClass("box-filled-2") && $(box[1]).hasClass("box-filled-2") && $(box[2]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ($(box[3]).hasClass("box-filled-2") && $(box[4]).hasClass("box-filled-2") && $(box[5]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ($(box[6]).hasClass("box-filled-2") && $(box[7]).hasClass("box-filled-2") && $(box[8]).hasClass("box-filled-2")) {
					xWins();
				}   // X Vertically
				else if ($(box[0]).hasClass("box-filled-2") && $(box[3]).hasClass("box-filled-2") && $(box[6]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ($(box[1]).hasClass("box-filled-2") && $(box[4]).hasClass("box-filled-2") && $(box[7]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ($(box[2]).hasClass("box-filled-2") && $(box[5]).hasClass("box-filled-2") && $(box[8]).hasClass("box-filled-2")) {
					xWins();
				}   // X Diagonally
				else if ($(box[0]).hasClass("box-filled-2") && $(box[4]).hasClass("box-filled-2") && $(box[8]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ($(box[2]).hasClass("box-filled-2") && $(box[4]).hasClass("box-filled-2") && $(box[6]).hasClass("box-filled-2")) {
					xWins();
				}
				else if ((turnNumber === 8) && ($('.available').length === 1)) {
					tieGame();
				}
			}

			function oWins() {
				gameHasEnded = true;
				$( ".box" ).css("backgroundColor", "#EFEFEF");
				$('.screen-win').addClass("screen-win-one");
				$('.message').text("Winner");
			}

			function xWins() {
				gameHasEnded = true;
				$( ".box" ).css("backgroundColor", "#EFEFEF");
				$('.screen-win').addClass("screen-win-two");
				$('.message').text("Winner");
			}

			function tieGame() {
				gameHasEnded = true;
				$( ".box" ).css("backgroundColor", "#EFEFEF");
				$('.screen-win').addClass("screen-win-tie");
				$('.message').text("It's a Tie!");
			}

			function startGame() {
				
				turnNumber = 0;
				gameHasEnded = false;

				$( ".box" ).addClass( "available" );
				// If starting a new game, remove filled boxes
				$( ".box" ).removeClass( "box-filled-1" );
				$( ".box" ).removeClass( "box-filled-2" );
				
				$(player1).addClass("active");
				$(player2).removeClass("active");

				$(".screen-win").removeClass("screen-win-one");
				$(".screen-win").removeClass("screen-win-two");
				$(".screen-win").removeClass("screen-win-tie");

				$('#finish').toggle(false);
			}

			// Fade out start screen
			$('.screen-start a').click(function() { 
		        $(this).parent().parent().fadeOut(400);
			});

			// Start game
			$(".button").on("click", function() {
				$('#board').toggle(true);
				startGame();

			});

			//On box mouseover
			$(".box").on("mouseover", function() {
				
				if ($(this).hasClass("available")) {

					//If turn number is odd
					if (turnNumber % 2 === 0) {
						//Show o image
						$(this).addClass("box-filled-1");
						this.style.backgroundColor = "#EFEFEF";
					}
					//If turn number is even
					if (turnNumber % 2 != 0) {
						//Show x image
						$(this).addClass("box-filled-2");
						this.style.backgroundColor = "#EFEFEF";
					}
				}	
			});

			// Set background back to gray on mouseout
			$(".box").on("mouseout", function(){

				if ($(this).hasClass( "available" )) {

					$(this).removeClass("box-filled-1");
					$(this).removeClass("box-filled-2");
				}
			});

			// When a box is clicked
			$(".box").on("click", function() {

				if ($(this).hasClass("available")) {

					checkIfSomebodyWon();

					if (gameHasEnded) {
						$('#board').toggle(false);
						$('#finish').toggle(true);
					}

					else if (turnNumber % 2 != 0) {
						$(player1).addClass("active");
					 	$(player2).removeClass("active");
					 	$(this).removeClass( "available" );
					 	this.style.backgroundColor = "#3688C3";
					 	turnNumber += 1;
					}

					else if (turnNumber % 2 === 0) {
					 	$(player2).addClass("active");
					 	$(player1).removeClass("active");
					 	$(this).removeClass( "available" );
					 	this.style.backgroundColor = "#FFA000";
					 	turnNumber += 1;
					}
				}
			});
		});
	};

ticTacToe();
}());	

