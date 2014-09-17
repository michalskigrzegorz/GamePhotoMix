// JavaScript / jQuery Document
// name: 'GamePhotoMix'
// version: v0.1
// author: Michalski Grzegorz
// more: https://github.com/michalskigrzegorz
// more: pl.linkedin.com/in/grzegorzmichalski/en

$(document).ready(function(){

	// load first photo on _gallery 
	var gallery = ['p001', 'p002'];
	var loadPhoto = gallery[0];
	
	// CHECK which photo is already loaded
    // console.log(loadPhoto);
	
	var whichPhoto = function () {
		if (loadPhoto === 'p001') {

			// CHECK loadPhoto variable
			console.log('p001 is already loaded');	
			// if it's equal 'p001'
			// script will loading photot p001 to the div class='gameWindow'
			$(".gameWindow")
				.css({
					"background-image": "url(_gallery/p001.jpg)"
				});						

		}
							
	}	
	
//	whichPhoto();
	

	// Write your Nickname and then click Start Game


	var startButton = function () {		
		var fname;
		$(document).ready(function() {
			var fname = $('#nickname');
			fname.click(function() {
			$('.nick h2').text('Nickname: ' + fname.val());
			});
		return fname;
		});
		
		$(".startButton")
			.click(function() {
				$(".startGame")
					.css({"background-color": 'red'});
		})
		
		// dopisac:
		// funkcja timer, po kliknięciu startButton, nickname się załadował i okno się zamyka
		// gdy okno się zamknie wywołujemy funkcję whichPhoto()
	}
	
	startButton();

})