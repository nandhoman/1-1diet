const pool = require("./config/db.config.js");

var allCIDS = [];
var CIDStoday = [];

async function findNextCID(_callback) {
    pool.query('SELECT * FROM communityid', (error, result) => {
        if (error) throw error;
 
        console.log(result)
        // console.log(result.length)

        var ThisCommunityID;

        for (ThisCommunityID = 0; ThisCommunityID < result.length; ThisCommunityID++) {
            allCIDS.push(result[ThisCommunityID].CommunityID);
        }
        console.log(allCIDS)
    });
    _callback  
}

async function addZero(number) {
    if (number < 10) {
        return ("0" + number)
    }
    else{
        return number
    }
}

async function SearchLatestCommunityID() {
    console.log(allCIDS);
    for (ThisCommunityID = 0; ThisCommunityID < allCIDS.length; ThisCommunityID++) {
        var DayAndSort = "CID" + addZero(new Date().getFullYear()) + addZero((new Date().getMonth() + 1)) + addZero(new Date().getDate());
        console.log(DayAndSort);
        if (allCIDS[ThisCommunityID].includes(DayAndSort) = true) {
            CIDStoday.push(allCIDS[ThisCommunityID])
            
        }
    }
    console.log("today: " + CIDStoday)
}

findNextCID(SearchLatestCommunityID());
// await SearchLatestCommunityID();




