var api = 'https://explorer.kryptokrona.se/api';
var donationAddress = "SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR";
var blockTargetInterval = 90; 
var coinUnits = 100; 
var totalSupply =  100000000000000; 
var symbol = 'XKR';
var refreshDelay = 30000;

// pools stats
var networkStat = {
 "xkr": [
	["pool.kryptokrona.se", "https://explorer.kryptokrona.se/pool1/"],
	["pool2.kryptokrona.se", "https://explorer.kryptokrona.se/pool2/"],
	["pool3.kryptokrona.se", "https://explorer.kryptokrona.se/pool3/"]
	//["pool-name", "pool-url:port"],
	//["pool-name", "pool-url:port"]
 ]
};


var networkStat2 = {
	"xkr": [

	]
   };