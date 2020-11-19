// const fetch = require("node-fetch");

var CommunityID;

function getRecipes(count) {
    fetch('http://phisapi.nhhost.online:4001/recipes')
    .then(response => response.json())
    .then(data =>{
        // console.log(data)
        var CommunityID = data[count].CommunityID;
        console.log(CommunityID);    
        var PDFPath = data[count].PDFPath;
        console.log(PDFPath);
        var Populairity = data[count].Populairity;
        console.log(Populairity);
        var Preparation = data[count].Preparation;
        console.log(Preparation);
        var BannerImageID = data[count].CommunityID;
        console.log(CommunityID);
        var Text = data[count].Text;
        console.log(Text);
        var Readtime = data[count].Readtime;
        console.log(Readtime);
        var AverageRanking = data[count].AverageRanking;
        console.log(AverageRanking);
        var Likes = data[count].Likes;
        console.log(Likes);
        var Title = data[count].Title;
        document.getElementById("title").innerHTML = Title;
        console.log(Title);
        var Step = data[count].Step;
        console.log(Step);
        var Persons = data[count].Persons;
        console.log(Persons);
        var Ingredients = data[count].Ingredients;
        console.log(Ingredients);
    } )
}

for (count = 0; count < 1; count++) {
    getRecipes(count);
    // console.log(CommunityID);
}