function(doc) {
    emit(doc, {
    	"Recipe": doc._id,
    	"RecipeRev": doc._rev,
    	"RecipeName": doc.RecipeName,
    	"Group": doc.Group,
    	"Rating": doc.Rating,
    	"Date": doc.Date,
    	"MealTime": doc.MealTime,
    	"Directions": doc.Directions
    });
  
};