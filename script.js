//BUSINESS LOGIC

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
function PlaceBook() {
  this.places = [];
}
PlaceBook.prototype.addPlace = function (place) {
  this.places.push(place);
};

PlaceBook.prototype.findPlace = function (location) {
  return this.places.find(function (place) {
    return place.location === location;
  });
};
PlaceBook.prototype.deletePlace = function (location) {
  this.places = this.places.filter(function (place) {
    return place.location !== location;
  });
};
