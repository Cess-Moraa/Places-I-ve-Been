function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}
Place.prototype.getLocation = function () {
  return this.location;
};

Place.prototype.getDetails = function () {
  return this.location + " | Landmarks: " + this.landmarks +
         " | Season: " + this.season +
         " | Notes: " + this.notes;
};