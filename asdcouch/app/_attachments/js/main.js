//Jason Bentley
//ASD 1211 
//Project 3



//Wait until the DOM is ready
$(document).on("pageinit", function(){

	

// JSON Data Loader
    $('#chicken').on("click", function(){
    	$('#recipeList').empty();
	    console.log("Chicken Data!!");
        $.ajax({
            "url": '_view/chicken',
            "dataType": 'json',
            "success": function(data){

				$.each(data.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
            }
            
        });

    });	
    
    $('#beef').on("click", function(){
    	$('#recipeList').empty();
	    console.log("Beef Data!!");
        $.ajax({
            "url": '_view/beef',
            "dataType": 'json',
            "success": function(data){

				$.each(data.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
            }
            
        });
    });
    
    $('#pork').on("click", function(){
    	$('#recipeList').empty();
	    console.log("Pork Data!!");
        $.ajax({
            "url": '_view/pork',
            "dataType": 'json',
            "success": function(data){

				$.each(data.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
            }
            
        });
    });
    
    $('#veggie').on("click", function(){
    	$('#recipeList').empty();
	    console.log("Veggie Data!!");
        $.ajax({
            "url": '_view/veggie',
            "dataType": 'json',
            "success": function(data){

				$.each(data.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
            }
            
        });
    });
    
    $('#date').on("click", function(){
    	$('#recipeList').empty();
	    console.log("Date Data!!");
        $.ajax({
            "url": '_view/date',
            "dataType": 'json',
            "success": function(data){

				$.each(data.rows, function(index, recipe) {
					var RecipeName = recipe.value.RecipeName;
					$('#recipeList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(RecipeName)
						)
					);
				});
				$('#recipeList').listview('refresh');
            }
            
        });
    });
    
    
    
    
});