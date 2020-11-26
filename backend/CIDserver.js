const pool = require("./config/db.config.js");
console.log("CIDserver is listening")
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function ReservateNewID(generatedCommunityid) {
    var databaseValue = " (\"" + generatedCommunityid + "\", " + 0 + ", " + 1 + ")"; 
    pool.query('INSERT INTO communityid VALUES' + databaseValue, (error, result) => {
              if (error) throw error;
          });
}

function SearchLatestCommunityID(RecievedAllCIDS) {
    var DayAndSort = "CID" + addZero(new Date().getFullYear()) + addZero((new Date().getMonth() + 1)) + addZero(new Date().getDate());
    var nakedCIDS = [];
    var CIDStoday = [];
    for (ThisCommunityID = 0; ThisCommunityID < RecievedAllCIDS.length; ThisCommunityID++) {        
        if (RecievedAllCIDS[ThisCommunityID].includes(DayAndSort) === true) {
            CIDStoday.push(RecievedAllCIDS[ThisCommunityID]);
        }
    }
    for (ThisCommunityID = 0; ThisCommunityID < CIDStoday.length; ThisCommunityID++) {
        var TempStoreNakedCIDS = CIDStoday[ThisCommunityID];
        var NakedCID = TempStoreNakedCIDS.replace(DayAndSort, "");
        nakedCIDS.push(NakedCID);
    }
    console.log(nakedCIDS);
    nakedCIDS = nakedCIDS.map(n => parseInt(n.toString(8), 10));
    highestValue = Math.max.apply(null,nakedCIDS)
    console.log(nakedCIDS.length);
    console.log("before");
    if (nakedCIDS.length = 0) {
       var newValue = 1;
    }
    else {
        var newValue = highestValue + 1;
    }
    console.log("after", newValue)
    var generateNewID = DayAndSort + pad(newValue, 4);
    console.log(generateNewID);
    return generateNewID;
}

function findNextCID() {
    var allCIDS = [];
    pool.query('SELECT * FROM communityid', (error, result) => {
        if (error) throw error;
        var ThisCommunityID = 0;

        for (ThisCommunityID = 0; ThisCommunityID < result.length; ThisCommunityID++) {
            allCIDS.push(result[ThisCommunityID].CommunityID);
        }
        var newID = SearchLatestCommunityID(allCIDS);
        console.log(newID);
        ReservateNewID(newID);
        return newID;
    });
}

function addZero(number) {
    if (number < 10) {
        return ("0" + number)
    }
    else{
        return number
    }
}

function main() {
   return findNextCID();
}

module.exports = main();
  


