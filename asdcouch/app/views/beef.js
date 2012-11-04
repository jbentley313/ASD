function(doc) {
  if (doc._id.substr(0, 5) === "beef:") {
    emit(doc._id);
  }
};