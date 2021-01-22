function getRecipes(){
    fetch('http://172.16.1.40:3000/recipes')
        .then(response => response.json())
        .then(data => renderRecipes(data));
}
function renderRecipes(data){
    console.log(data)
    let content  = document.querySelector('#recipes .carousel-inner');
    for (var i = 0; i < data.length; i++){
      
      if (i == 0){
        content.innerHTML += '<div class="carousel-item active"> <a data-id="' + data[i].CommunityID + '" href="#" class="card recipes"> <div class="card-content"> <h3 id="title">' + data[i].Title + '</h3> <p id="description">' + data[i].Preparation + '</p><div class="card-links"><div class="card-link"><i class="far fa-heart"></i><p id="likes">12</p></div><div class="card-link"><i class="far fa-comment"></i><p id="comments">12</p></div><div class="card-link"><i class="far fa-star"></i><p id="populairity">12</p></div></div></div></a></div>';
      }
      else {
        content.innerHTML += '<div class="carousel-item"> <a data-id="' + data[i].CommunityID + '"href="#" class="card recipes"> <div class="card-content"> <h3 id="title">' + data[i].Title + '</h3> <p id="description">' + data[i].Preparation + '</p><div class="card-links"><div class="card-link"><i class="far fa-heart"></i><p id="likes">12</p></div><div class="card-link"><i class="far fa-comment"></i><p id="comments">12</p></div><div class="card-link"><i class="far fa-star"></i><p id="populairity">12</p></div></div></div></a></div>';
      }
    }
    
    jQuery(document).ready(function(){
      jQuery('a.recipes').on('click', function(){               
        let recipeID = $(this).data("id");
        getRecipe(recipeID);
        // console.log(jsonObject);
                // console.log(jsonObject.CommunityID);
      });
    });
  
    function getRecipe(id) {
    fetch('http://172.16.1.40:3000/recipes')
        .then(response => response.json())
        .then(data => TESTrenderRecipe(data, id));
    }

    function TESTrenderRecipe(data, id) {
    
    $.each(data, function (index, jsonObject) {
      let recipeContent = $('#recipe');
      let communityContent = $('#community');
        if (jsonObject.CommunityID == id) {
            recipeContent.html('<section> <div class="container"> <div class="row"> <div class="col-12"> <div class="recipeHead"> <div class="recipeWrap"> <div class="recipeImg"> <img src="img/recipes.jpg"> </div><img src="img/frame.png"> <div class="faseIcon d-flex align-items-center justify-content-center"> <p class="faseText">Stap</p><p class="faseNr">' + jsonObject.Step + '</p></div></div><h2 id="title">' + jsonObject.Title + '</h2> <div class="views d-flex align-items-center"> <i class="fas fa-eye"></i> <p class="view-count">' + jsonObject.AverageRanking + '</p></div></div><div class="recipeContent"> <h4>Dit recept bevat</h4> <p>2/3 portie groente | 1 portie eiwit |1/5 portie zuivel</p><h4>Ingrediënten</h4> <p>' + jsonObject.Ingredients + '</p><h4>Bereiding</h4> <p id="preparation">' + jsonObject.Preparation + '</p></div><div class="recipeLink text-center"> <a href="#" class="link"> <i class="far fa-heart"></i> </a> <a href="#" class="link"> <i class="far fa-comment"></i> </a> <a href="#" class="link"> <i class="far fa-star"></i> </a> <i class="fas fa-times closeRecipe" style="display: block;padding: 15px;font-size: 30px;color: #dcdcdc;"></i> </div></div></div></div></section>');
            
            recipeContent.toggle();
            communityContent.toggle();
        }
      });
      
      jQuery(document).ready(function(){
        let communityContent = $('#community');
        jQuery('.closeRecipe').on('click', function(){               
          $('#recipe').hide();
          communityContent.toggle();
        });
      });
    }
}
getRecipes()