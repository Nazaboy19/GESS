/*
*/
// 1. Link to Firebase
var GESSData = new Firebase("https://gess.firebaseio.com/"); 





$("#addGessInpit").on("click", function(){

	// Grabs user input
	var GESS = $("#gessInput").val().trim();
	var Game = $("#GameInput").val().trim();
	var GamerTag = $("#gamerTagInput").val().trim();
	var GamerRank = $("#gamerRankInput").val().trim();
	var GameKills = $("#GameKillsInput").val().trim();
	var GameDeaths = $("#GameDeathsnput").val().trim();
	var InGameMonie = $("#InGameMonieInput").val().trim();
	var Console = $("#ConsoleInput").val().trim();
	



	// Creates local "temporary" object for  GESS Updates
	var GESSclick = {
		name:  GESS,
		Game: Game,
		GamerTag: GamerTag,
		GameRank: GameRank,
		GameKills: GameKills,
		GameDeaths: GameDeaths,
		InGameMonie: InGameMonie,
		Console: Console,
		
	}

	// Uploads train data to the database
	GESSData.push(GESS);

	// Logs everything to console
	console.log(GESS.name);
	console.log(GESS.Game); 
	console.log(console);
	console.log(GESS.GamerTag)

	// Alert
	alert("GESS Post Successfully Updated!");

	// Clears all of the text-boxes
	$("#GESSInput").val("");
	$("#consoleInput").val("");
	$("#GameInput").val("");
	$("#GamerTagInput").val("");
	$("#RankInput").val("");
	$("#KillsInput").val("");
	$("#DeathsInput").val("");
	$("#InGameMonieInput").val("");

	
	
});



