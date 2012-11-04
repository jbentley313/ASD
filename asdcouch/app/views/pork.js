function(doc) {
  if (doc._id.substr(0, 5) === "pork:") {
    emit(doc._id);
  }
};