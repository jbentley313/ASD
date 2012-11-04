function(doc) {
  if (doc._id.substr(0, 8) === "chicken:") {
    emit(doc._id);
  }
};