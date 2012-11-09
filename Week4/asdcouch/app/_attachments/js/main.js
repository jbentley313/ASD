//Jason Bentley
//ASD 1211 
//Project 3



//Wait until the DOM is ready
$("#home").on("pageinit", function(){
	


	$('#chickenNav').on("click", function(){
	    console.log("Chicken Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/chicken',
            "type": 'GET',
            "dataType": 'json',
            "success": function(response){

				$.each(response.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					var Rating = recipe.value.Rating;
					var MealTime = recipe.value.MealTime;
					var Directions = recipe.value.Directions;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#").text(RecipeName).append(
								$('<p>').text(''),
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
//					$(''+
//						'<div>' +
//							'<p>' + recipe.value.RecipeName +'</p>' +
//							'<p>' + 'Rating: ' + recipe.value.Rating +'</p>' +
//							'<p>' + 'Meal Time: ' + recipe.value.MealTime +'</p>' +
//							'<p>' + 'Directions: ' + recipe.value.Directions +'</p>' +
//							'<hr />' +
//						'</div>'
//					).appendTo('#recipeList');
//					console.log(response);
//				});
//            },
//            error: function(msg) {
//            	console.log("Error.");
//            	console.log(msg);
//            }
//        });
//    });
    
	$('#beefNav').on("click", function(){
	    console.log("Beef Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/beef',
            "type": 'GET',
            "dataType": 'json',
            "success": function(response){

				$.each(response.rows, function(index, recipe) {
					$(''+
						'<div>' +
							'<p>' + recipe.value.RecipeName +'</p>' +
							'<p>' + 'Rating: ' + recipe.value.Rating +'</p>' +
							'<p>' + 'Meal Time: ' + recipe.value.MealTime +'</p>' +
							'<p>' + 'Directions: ' + recipe.value.Directions +'</p>' +
							'<hr />' +
						'</div>'
					).appendTo('#recipeList');
					console.log(response);
				});
            },
            error: function(msg) {
            	console.log("Error.");
            	console.log(msg);
            }
        });
    });
    
	$('#porkNav').on("click", function(){
	    console.log("Pork Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/pork',
            "type": 'GET',
            "dataType": 'json',
            "success": function(response){

				$.each(response.rows, function(index, recipe) {
					$(''+
						'<div>' +
							'<p>' + recipe.value.RecipeName +'</p>' +
							'<p>' + 'Rating: ' + recipe.value.Rating +'</p>' +
							'<p>' + 'Meal Time: ' + recipe.value.MealTime +'</p>' +
							'<p>' + 'Directions: ' + recipe.value.Directions +'</p>' +
							'<hr />' +
						'</div>'
					).appendTo('#recipeList');
					console.log(response);
				});
            },
            error: function(msg) {
            	console.log("Error.");
            	console.log(msg);
            }
        });
    });
    
	$('#veggieNav').on("click", function(){
	    console.log("Veggie Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/veggie',
            "type": 'GET',
            "dataType": 'json',
            "success": function(response){

				$.each(response.rows, function(index, recipe) {
					$(''+
						'<div>' +
							'<span>' + recipe.value.RecipeName +'</span>' +
							'<p>' + 'Rating: ' + recipe.value.Rating +'</p>' +
							'<p>' + 'Meal Time: ' + recipe.value.MealTime +'</p>' +
							'<p>' + 'Directions: ' + recipe.value.Directions +'</p>' +
							'<hr />' +
						'</div>'
					).appendTo('#recipeList');
					console.log(response);
				});
            },
            error: function(msg) {
            	console.log("Error.");
            	console.log(msg);
            }
        });
    });;
    
    $('#allrecipes').on("click", function(){
	    console.log("All Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/all',
            "type": 'GET',
            "dataType": 'json',
            "success": function(response){

				$.each(response.rows, function(index, recipe) {
					$(''+
						'<div>' +
							'<p>' + recipe.value.RecipeName +'</p>' +
							'<p>' + 'Rating: ' + recipe.value.Rating +'</p>' +
							'<p>' + 'Meal Time: ' + recipe.value.MealTime +'</p>' +
							'<p>' + 'Directions: ' + recipe.value.Directions +'</p>' +
							'<hr />' +
						'</div>'
					).appendTo('#recipeList');
					console.log(response);
				});
            },
            error: function(msg) {
            	console.log("Error.");
            	console.log(msg);
            }
        });
    });
        
});