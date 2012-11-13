function(doc) {
  if (doc.Group === "chicken") {
    emit(doc.Group, {
    	"Recipe": doc._id,
    	"RecipeName": doc.RecipeName,
    	"Group": doc.Group,
    	"Rating": doc.Rating,
    	"Date": doc.Date,
    	"MealTime": doc.MealTime,
    	"Directions": doc.Directions
    });
  }
};




//function(doc) {
//	  if (doc._id.substr(0, 8) === "chicken:") {
//	    emit(doc._id.substr(8), {
//	    	"RecipeName": doc.RecipeName,
//	    	"Group": doc.Group,
//	    	"Rating": doc.Rating,
//	    	"Date": doc.Date,
//	    	"MealTime": doc.MealTime,
//	    	"Directions": doc.Directions
//	    });
//	  }
//	};