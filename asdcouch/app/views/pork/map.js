function(doc) {
  if (doc._id.substr(0, 5) === "pork:") {
    emit(doc._id.substr(5), {
    	"RecipeName": doc.RecipeName,
    	"Group": doc.Group,
    	"Rating": doc.Rating,
    	"Date": doc.Date,
    	"MealTime": doc.MealTime,
    	"Directions": doc.Directions
    });
  }
};