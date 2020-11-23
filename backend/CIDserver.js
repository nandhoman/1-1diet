const pool = require("./config/db.config.js");

var allCIDS = [];
var CIDStoday = [];

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function findNextCID() {
    pool.query('SELECT * FROM communityid', (error, result) => {
        if (error) throw error;
        console.log(result);
        var ThisCommunityID = 0;

        for (ThisCommunityID = 0; ThisCommunityID < result.length; ThisCommunityID++) {
            allCIDS.push(result[ThisCommunityID].CommunityID);
        }
        console.log(allCIDS);
    });
    // return allCIDS
    
}


function addZero(number) {
    if (number < 10) {
        return ("0" + number)
    }
    else{
        return number
    }
}

function SearchLatestCommunityID() {
    var DayAndSort = "CID" + addZero(new Date().getFullYear()) + addZero((new Date().getMonth() + 1)) + addZero(new Date().getDate());
    var nakedCIDS = [];
    for (ThisCommunityID = 0; ThisCommunityID < allCIDS.length; ThisCommunityID++) {        
        if (allCIDS[ThisCommunityID].includes(DayAndSort) === true) {
            CIDStoday.push(allCIDS[ThisCommunityID]);
        }
    }
    for (ThisCommunityID = 0; ThisCommunityID < CIDStoday.length; ThisCommunityID++) {
        var TempStoreNakedCIDS = CIDStoday[ThisCommunityID];
        var NakedCID = TempStoreNakedCIDS.replace(DayAndSort, "");
        nakedCIDS.push(NakedCID);
    }
    var highestValue = Math.max(nakedCIDS);
    
    var newValue = highestValue + 1;
    
    var generateNewID = DayAndSort + pad(newValue, 4);
    
    ReservateNewID(generateNewID);
}

function ReservateNewID(generatedCommunityid) {
    var databaseValue = " (\"" + generatedCommunityid + "\", " + 0 + ", " + 1 + ")"; 
    pool.query('INSERT INTO communityid VALUES' + databaseValue, (error, result) => {
              if (error) throw error;
          });
}


findNextCID();
setTimeout(() => SearchLatestCommunityID(), 900);




