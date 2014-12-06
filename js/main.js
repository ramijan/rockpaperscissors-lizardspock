function play(playerChoice) {
	
	// Get a random number and use it to determine computer choice
	var rand = Math.random();
	var computerChoice = null;
	if (rand < .2) {
		computerChoice = 'scissors';
	}
	else if (rand < .4) {
		computerChoice = 'spock';
	}
	else if (rand < .6) {
		computerChoice = 'paper';
	}
	else if (rand < .8) {
		computerChoice = 'lizard';
	}
	else {
		computerChoice = 'rock';
	}

	// Compare playerChoice and computerChoice to determine who wins
	switch(playerChoice) {

		case "scissors":
			if (computerChoice == 'paper' || computerChoice == 'lizard') {
				alert(playerChoice + " beats " + computerChoice + ". YOU WIN!");
			}
			else if (computerChoice == 'spock' || computerChoice == 'rock') {
				alert(playerChoice + " doesn't beat " + computerChoice + ". You lose!");
			}
			else {
				alert("You both picked " + playerChoice + "!  It's a tie!");
			}
			break;

		case 'spock':
			if (computerChoice == 'rock' || computerChoice == 'scissors') {
				alert(playerChoice + " beats " + computerChoice + ". YOU WIN!");
			}
			else if (computerChoice == 'paper' || computerChoice == 'lizard') {
				alert(playerChoice + " doesn't beat " + computerChoice + ". You lose!");
			}
			else {
				alert("You both picked " + playerChoice + "!  It's a tie!");
			}
			break;

		case 'paper':
			if (computerChoice == 'rock' || computerChoice == 'spock') {
				alert(playerChoice + " beats " + computerChoice + ". YOU WIN!");
			}
			else if (computerChoice == 'scissors' || computerChoice == 'lizard') {
				alert(playerChoice + " doesn't beat " + computerChoice + ". You lose!");
			}
			else {
				alert("You both picked " + playerChoice + "!  It's a tie!");
			}
			break;

		case 'lizard':
			if (computerChoice == 'paper' || computerChoice == 'spock') {
				alert(playerChoice + " beats " + computerChoice + ". YOU WIN!");
			}
			else if (computerChoice == 'scissors' || computerChoice == 'rock') {
				alert(playerChoice + " doesn't beat " + computerChoice + ". You lose!");
			}
			else {
				alert("You both picked " + playerChoice + "!  It's a tie!");
			}
			break;

		case 'rock':
			if (computerChoice == 'lizard' || computerChoice == 'scissors') {
				alert(playerChoice + " beats " + computerChoice + ". YOU WIN!");
			}
			else if (computerChoice == 'spock' || computerChoice == 'paper') {
				alert(playerChoice + " doesn't beat " + computerChoice + ". You lose!");
			}
			else {
				alert("You both picked " + playerChoice + "!  It's a tie!");
			}
			break;

		default:
			alert("Something went wrong.  Invalid choice?");
		}
}