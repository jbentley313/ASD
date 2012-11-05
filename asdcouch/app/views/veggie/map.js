function(doc) {
  if (doc._id.substr(0, 7) === "veggie:") {
    emit(doc._id.substr(7), {
    	"RecipeName": doc.RecipeName,
    	"Group": doc.Group,
    	"Rating": doc.Rating,
    	"Date": doc.Date,
    	"MealTime": doc.MealTime,
    	"Directions": doc.Directions
    });
  }
};