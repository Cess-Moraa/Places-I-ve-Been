//BUSINESS LOGIC

// Place constructor
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

//Prototype method
Place.prototype.getLocation = function () {
  return this.location;
};

Place.prototype.getDetails = function () {
  return this.location + " | Landmarks: " + this.landmarks +
         " | Season: " + this.season +
         " | Notes: " + this.notes;
};

// PlaceBook constructor
function PlaceBook() {
  this.places = [];
}

// Add place
PlaceBook.prototype.addPlace = function (place) {
  this.places.push(place);
};

// Find Place by location
PlaceBook.prototype.findPlace = function (location) {
  return this.places.find(function (place) {
    return place.location === location;
  });
};

// Delete place by location
PlaceBook.prototype.deletePlace = function (location) {
  this.places = this.places.filter(function (place) {
    return place.location !== location;
  });
};

//UI LOGIC
const placeBook = new PlaceBook();

// Handle form submission
document.getElementById("place-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.getElementById("location").value.trim();
  const landmarks = document.getElementById("landmarks").value.trim();
  const season = document.getElementById("season").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!location || !landmarks || !season) {
    alert("Please fill in location, landmarks, and season.");
    return;
  }

  const place = new Place(location, landmarks, season, notes);
  placeBook.addPlace(place);

  displayPlaces();
  this.reset();
});

// Display places
function displayPlaces() {
  const list = document.getElementById("places-list");
  list.innerHTML = "";

  placeBook.places.forEach(function (place) {
    const li = document.createElement("li");

    // Place name clickable for details
    const nameSpan = document.createElement("span");
    nameSpan.textContent = place.location;
    nameSpan.className = "place-name";

    nameSpan.addEventListener("click", function () {
      document.getElementById("place-details").textContent =
        place.getDetails();
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
      placeBook.deletePlace(place.location);
      document.getElementById("place-details").textContent =
        "Click a place to view details";
      displayPlaces();
    });

    li.appendChild(nameSpan);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

