//Jason Bentley
//ASD 1211 
//Project 4


var urlVars = function() {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};

$(document).on("pageshow", "#recipeListPage", function() {
	var cat = urlVars()["cat"];
	$('#recipeList').empty();
	$.couch.db("asdproject").view("recipekeeper/" + cat, {
		"success": function(response){
			console.log(response);
			$.each(response.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					var Rating = recipe.value.Rating;
					var MealTime = recipe.value.MealTime;
					var Directions = recipe.value.Directions;
					var Recipe = recipe.value.Recipe
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "detailsPage.html?recipe=" + Recipe).text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
				
            },
            error: function(msg) {
            	console.log("Error.");
            	console.log(msg);
            }
	});
	
});

$(document).on("pageshow", "#detailsPage", function() {
	var recipeT = urlVars()["recipe"];
	
	$('#details').empty();
	$.couch.db("asdproject").openDoc(recipeT, {
		key: recipeT,
		"success": function(data) {
			var RecipeName = data.RecipeName;
			var Rating = data.Rating;
			$('#details').append(
					$('<p>').text(RecipeName),
					$('<p>').text(Rating)
				);

	
		}
		
	});

});
//	var recipeT = urlVars()["recipe"];
//	$('#details').empty();
//	$.couch.db("asdproject").view("recipekeeper/all", {
//	
//			key: recipeT,
//			"success": function(data){
//				console.log(data);
//				console.log(recipeT);
//				$.each(data.rows, function(index, recipe) {
//						var RecipeName = recipe.value.RecipeName;
//						var Rating = recipe.value.Rating;
//						var MealTime = recipe.value.MealTime;
//						var Directions = recipe.value.Directions;
//						var Recipe = recipe.value.Recipe
//						$('#details').append(
//							$('<li>').append(
//								$('<a>').attr("href", "#").text(RecipeName).append(
//									$('<p>').text('.'),
//									$('<p>').text('Rating: ' + Rating),
//									$('<p>').text('Meal Time: ' + MealTime),
//									$('<p>').text('Directions: ' + Directions)
//								)
//							)
//						);
//					});
//					$('#details').listview('refresh');
//					
//	            },
//	            error: function(msg) {
//	            	console.log("Error.");
//	            	console.log(msg);
//	            }
//		});
		
	







































//Wait until the DOM is ready
//$("#home").on("pageinit", function(){
//	
//
//
//	$('#chickenNav').on("click", function(){
//	    console.log("Chicken Data!!");
//        $('#recipeList').empty();
//        $.ajax({
//            "url": '_view/chicken',
//            "type": 'GET',
//            "dataType": 'json',
//            "success": function(response){
//
//				$.each(response.rows, function(index, recipe) {
//					var RecipeName = recipe.value.RecipeName;
//					var Rating = recipe.value.Rating;
//					var MealTime = recipe.value.MealTime;
//					var Directions = recipe.value.Directions;
//					$('#recipeList').append(
//						$('<li>').append(
//							$('<a>').attr("href", "#").text(RecipeName).append(
//								$('<p>').text(''),
//								$('<p>').text('Rating: ' + Rating),
//								$('<p>').text('Meal Time: ' + MealTime),
//								$('<p>').text('Directions: ' + Directions)
//							)
//						)
//					);
//				});
//				$('#recipeList').listview('refresh');
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });	
//	
//
//    
//	$('#beefNav').on("click", function(){
//	    console.log("Beef Data!!");
//        $('#recipeList').empty();
//        $.ajax({
//            "url": '_view/beef',
//            "type": 'GET',
//            "dataType": 'json',
//            "success": function(response){
//
//            	$.each(response.rows, function(index, recipe) {
//					var RecipeName = recipe.value.RecipeName;
//					var Rating = recipe.value.Rating;
//					var MealTime = recipe.value.MealTime;
//					var Directions = recipe.value.Directions;
//					$('#recipeList').append(
//						$('<li>').append(
//							$('<a>').attr("href", "#").text(RecipeName).append(
//								$('<p>').text(''),
//								$('<p>').text('Rating: ' + Rating),
//								$('<p>').text('Meal Time: ' + MealTime),
//								$('<p>').text('Directions: ' + Directions)
//							)
//						)
//					);
//				});
//            	$('#recipeList').listview('refresh');
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });
//    
//	$('#porkNav').on("click", function(){
//	    console.log("Pork Data!!");
//        $('#recipeList').empty();
//        $.ajax({
//            "url": '_view/pork',
//            "type": 'GET',
//            "dataType": 'json',
//            "success": function(response){
//
//            	$.each(response.rows, function(index, recipe) {
//					var RecipeName = recipe.value.RecipeName;
//					var Rating = recipe.value.Rating;
//					var MealTime = recipe.value.MealTime;
//					var Directions = recipe.value.Directions;
//					$('#recipeList').append(
//						$('<li>').append(
//							$('<a>').attr("href", "#").text(RecipeName).append(
//								$('<p>').text(''),
//								$('<p>').text('Rating: ' + Rating),
//								$('<p>').text('Meal Time: ' + MealTime),
//								$('<p>').text('Directions: ' + Directions)
//							)
//						)
//					);
//				});
//            	$('#recipeList').listview('refresh');
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });
//    
//	$('#veggieNav').on("click", function(){
//	    console.log("Veggie Data!!");
//        $('#recipeList').empty();
//        $.ajax({
//            "url": '_view/veggie',
//            "type": 'GET',
//            "dataType": 'json',
//            "success": function(response){
//
//            	$.each(response.rows, function(index, recipe) {
//					var RecipeName = recipe.value.RecipeName;
//					var Rating = recipe.value.Rating;
//					var MealTime = recipe.value.MealTime;
//					var Directions = recipe.value.Directions;
//					$('#recipeList').append(
//						$('<li>').append(
//							$('<a>').attr("href", "#").text(RecipeName).append(
//								$('<p>').text(''),
//								$('<p>').text('Rating: ' + Rating),
//								$('<p>').text('Meal Time: ' + MealTime),
//								$('<p>').text('Directions: ' + Directions)
//							)
//						)
//					);
//				});
//            	$('#recipeList').listview('refresh');
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });;
//    
//    $('#allrecipes').on("click", function(){
//	    console.log("All Data!!");
//        $('#recipeList').empty();
//        $.ajax({
//            "url": '_view/all',
//            "type": 'GET',
//            "dataType": 'json',
//            "success": function(response){
//
//            	$.each(response.rows, function(index, recipe) {
//					var RecipeName = recipe.value.RecipeName;
//					var Rating = recipe.value.Rating;
//					var MealTime = recipe.value.MealTime;
//					var Directions = recipe.value.Directions;
//					$('#recipeList').append(
//						$('<li>').append(
//							$('<a>').attr("href", "#").text(RecipeName).append(
//								$('<p>').text(''),
//								$('<p>').text('Rating: ' + Rating),
//								$('<p>').text('Meal Time: ' + MealTime),
//								$('<p>').text('Directions: ' + Directions)
//							)
//						)
//					);
//				});
//            	$('#recipeList').listview('refresh');
//            	
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });
//        
//});