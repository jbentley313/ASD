//Jason Bentley
//ASD 1211 
//Project 3



//Wait until the DOM is ready
$("#home").on("pageinit", function(){
	


	$('#chickenNav').on("click", function(){
	    console.log("Json Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/chicken',
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
    
	$('#beefNav').on("click", function(){
	    console.log("Json Data!!");
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
	    console.log("Json Data!!");
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
	    console.log("Json Data!!");
        $('#recipeList').empty();
        $.ajax({
            "url": '_view/veggie',
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