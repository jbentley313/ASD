function(doc) {
  if (doc._id.substr(0, 7) === "veggie:") {
    emit(doc._id);
  }
};