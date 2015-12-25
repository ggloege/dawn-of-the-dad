


/
//Play the game
var stamina;
var setCounter;
var currentSetting;
var decisionCount;

function nextSetting() {
	setCounter++;
}

function whereAreWeNow() {
	currentSetting = settings[setCounter];
}

function clearTheDecks() {
	$('#message').text('');
	$('.choose-me').hide();
	$('#result').text('');

}

function setDecisions() {
	decisionCount = currentSetting.decisions;
}

function enableMe() {
	$(':disabled').attr("disabled", "false");
}


function getMessage() {
	clearTheDecks();
	nextSetting();
	whereAreWeNow();
	$('#message').text(currentSetting.message);
	// enableMe();
	for(var	x in currentSetting.choices) {
		var choiceID = "#choice" + x;
		$(choiceID).text(currentSetting.choices[x].choice).show("slow");
	}
	setDecisions();	
}	

$('.start').click(function() {
	stamina = 100;
	setCounter = -1;
	$('.start').hide();
	$('#game-board').show();
	getMessage();
});

$('.choose-me').click(function() {
	if(decisionCount > 0) {
		var serveResult = this.value;
		$(this).hide();
		$('#result').text(currentSetting.choices[serveResult].result);
		decisionCount--;
	} else {
		$('#next').show("slow");
		$('#result').text(thatsEnough);
	}
});

$('#next').click(getMessage());

$('#start-over').click(function() {
	$('#start-toggle').toggle();
});


$('#start-over').click(function() {
	stamina = 100;
	setCounter = 0;
	getMessage();
});

