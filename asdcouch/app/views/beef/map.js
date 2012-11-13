function(doc) {
  if (doc.Group === "beef") {
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
//	  if (doc._id.substr(0, 5) === "beef:") {
//	    emit(doc._id.substr(5), {
//	    	"RecipeName": doc.RecipeName,
//	    	"Group": doc.Group,
//	    	"Rating": doc.Rating,
//	    	"Date": doc.Date,
//	    	"MealTime": doc.MealTime,
//	    	"Directions": doc.Directions
//	    });
//	  }
//	};