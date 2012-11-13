//Jason Bentley
//ASD 1211 
//Project 4



$(document).on("pageshow", "#recipeListPage", function() {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlKey = urlParts[1]
	console.log(urlKey);
	
	$('#recipeList').empty();
	$.couch.db("asdproject").view("recipekeeper/" + urlKey, {
		
		
		"success": function(response){
			
			console.log(response);
			
			
			$.each(response.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					var Rating = recipe.value.Rating;
					var MealTime = recipe.value.MealTime;
					var Directions = recipe.value.Directions;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#").text(RecipeName).append(
								$('<p>').text('.'),
								$('<p>').text('Rating: ' + Rating),
								$('<p>').text('Meal Time: ' + MealTime),
								$('<p>').text('Directions: ' + Directions)
							)
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