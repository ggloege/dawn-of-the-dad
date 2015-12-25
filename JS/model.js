function Choice(choice, staminaCost, result) {
	this.choice = choice;
	this.staminaCost = staminaCost;
	this.result = result;
}

//Choices
console.time("Time to load Choices");
var wakeUpSnooze = new Choice("Tap the snooze button. Just 9 more minutes will make all the difference in the world.", badChoice, "You were right... that 9 minutes made a huge difference. So did the 9 minutes after that, and the 9 minutes after that. You finally get up 30 minutes later."),
	wakeUpWakeUp = new Choice("Turn it off and actually get up.", goodChoice, "You stare at the ceiling for 3 seconds. Take a deep breath. Then quietly force your body upright and into your slippers. This hurts."),
	wakeUpScreen = new Choice("Grab your phone and check email. Maybe that first call of the day was cancelled and I can sleep in a bit.", badChoice, "Nope, meeting still on. Also your India project blew up over night, better send a few messages on that real quick. Might as well check twitter now that your phone is out."),
	wakeUpChoices = [wakeUpSnooze, wakeUpWakeUp, wakeUpScreen];

var morningStretch = new Choice("Take a few minutes to stretch and enjoy a quiet household.", goodChoice, "Nicely done. It always feels good to limber up and get things flowing."), 
	morningScreen = new Choice("Sit at the computer and check out the news.", badChoice, "Ugh. The world is a mess. Now you have to think about that for the rest of the day. Feeling rather down."),
	morningMakeBed = new Choice("Take a few seconds and make your bed.", goodChoice, "You control very little about your life, but at least you can start your day in control of that."),
	morningJournal = new Choice("Spend 10 minutes writing in your journal.", goodChoice, "You've set your thoughts in order and reduced some nagging anxiety. This is a great way to get things started."),
	morningCoffee = new Choice("Brew coffee. Drink coffee. Stare out window.", neutralChoice, "You have sated the caffeine beast inside of you. He has rewarded you with alertness and a lack of headaches around mid-morning."),
	morningChoices = [morningStretch, morningScreen, morningMakeBed, morningJournal, morningCoffee];

var work1,
	work2,
	work3,
	work4,
	workChoices = [work1, work2, work3, work4];

var lunchOut = new Choice("Step out and get a nice lunch. You've earned it. Treat yourself.", neutralChoice, "So many choices. You spend 15 minutes just deciding where to go. Then $20 later, a fairly unhealthy (but delicious) meal leaves you wanting a nap."),
	lunchIn = new Choice("Stay in. Fix a salad. "),
	lunchChoices = [lunchIn, lunchOut];

var afternoonCoffee,
	afternoonWorkOut,
	afternoonSideProject,
	afternoonChoices = [afternoonCoffee, afternoonWorkOut, afternoonSideProject];

var eveningBikes,
	eveningTV,
	eveningSpelling,
	eveningSunset,
	eveningChoices = [eveningBikes, eveningTV, eveningSpelling, eveningSunset];

var nightConversation,
	nightTV,
	nightDrink,
	nightSideProject,
	nightScreen,
	nightChoices = [nightConversation, nightTV, nightDrink, nightSideProject, nightScreen];

var shutDownDrink,
	shutDownSideProject,
	shutDownShower,
	shutDownJournal,
	shutDownFacebook,
	shutDownChoices = [shutDownDrink, shutDownSideProject, shutDownShower, shutDownJournal, shutDownFacebook];
console.timeEnd("Time to load Choices");

//Settings
function Setting(message, decisions, choices) {
	this.message = message;
	this.decisions = decisions;
	this.choices = choices;
}

var wakeUp = new Setting("Your eyes open to the soft sound of the alarm on your iPhone. You reach over and...", 1, wakeUpChoices),
	morningRoutine = new Setting("Well you're up now. Let's get this day going.", 3, morningChoices),
	work = new Setting("You head up to your home office. The day stands before you. What will you make of it?", 3, workChoices),
	lunch = new Setting("This is your lunch time.", 1, lunchChoices),
	afternoon = new Setting("This is your afternoon.", 2, afternoonChoices),
	evening = new Setting("This is your evening with Tristan.", 2, eveningChoices),
	nighttime = new Setting("This is your nighttime with Jing.", 2, nightChoices),
	shutDown = new Setting("This is your shut down time.", 2, shutDownChoices),
	settings = [wakeUp, morningRoutine, work, lunch, afternoon, evening, nighttime, shutDown];

var thatsEnough = "All out of decisions. Press 'Next' to get on with your day.";


var decisionCost = -5,
	goodChoice = decisionCost * -2,
	neutralChoice = decisionCost * -1,
	badChoice = decisionCost;
