//Jason Bentley
//ASD 1211 
//Project 3



//Wait until the DOM is ready
$(document).on("pageinit", function(){



// JSON Data Loader
    $('#chicken').on("click", function(){
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
});