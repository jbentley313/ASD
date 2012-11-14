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
//					var MealType = recipe.value.MealType;
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
			var RecId = data._id;
			var RecRev = data._rev;
			var RecipeName = data.RecipeName;
			var Rating = data.Rating;
			var Group = data.Group;
			var Directions = data.Directions
			$('#details').append(
					$('<h2>').text(RecipeName),
					$('<p>').text("Group: " + Group),
					$('<p>').text("Rating: " + Rating),
					$('<p>').text("Directions: " + Directions)
			);
			$('#editButton').on('click', function() {
				$('#recipename').val(RecipeName);
				$('#rating').val(Rating);
				$('#groups').val(Group);
				$('#directions').val(Directions);
			});
			$('#deleteButton').on('click', function() {
				var ask = confirm("Are you sure you want to delete this recipe?");
				if(ask){
					localStorage.removeItem(this.key);
					alert("Recipe was deleted!");
					$("#display1").listview("refresh");


				}else{
					alert("Recipe was NOT deleted.");
				}		
			});

	
		}
		
	});

});

$(document).on('pageshow', "#addRecipe", function() {
	function storeData(){
		alert('StoreDatafired');

	//Get all of our form field value and store in an object.
	//Object properties contain array with the form label and input values.
	var item 			= {};
		
		item._id		= $("#_id").val();
		item._rev		= $("#_rev").val();
		item.RecipeName	= $("#recipename").val();
		item.Group 		= $("#groups").val();
		item.Rating		= $("#rating").val();
		item.Directions = $("#directions").val();
		console.log(item._id);
	//Save data into Local Storage: Use Stringify to convert the object to a string.
		$.couch.db("asdproject").saveDoc(  
				  item	  
//				  {success: function() { alert("Saved ok."); }}  
				);  
	alert("Recipe Saved!");

	

}
	var save = $("#submit");
	save.on("click", function(){
		var arform = $("#addRecipeForm");
		arform.validate({
			invalidHandler: function(form, validator){
			},
			submitHandler: function(){
//				var data = arform.serializeArray();
//				parseRecipeForm(data);
				 
				storeData();
			}
		});			
	});
});	

