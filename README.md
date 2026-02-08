# Places I've Been 🌍
---
## Project Description
Places I’ve Been is a simple JavaScript web application that lets users keep track of all the places they have visited. Each destination is represented as a Place object with properties like location, landmarks, season, and notes. Users can:
   - Add new places
   - View details by clicking a place name
   - Delete a place from the list

This project demonstrates JavaScript constructors, prototypes, and test-driven development (TDD). The UI updates dynamically using JavaScript DOM manipulation.

---
## Author
Cecilia Moraa

---
## Technologies Used
- HTML
- CSS
- JavaScript
- Git & Github

---
## Project Setup Instructions
1. Clone the repository:

       git clone https://github.com/your-username/places-youve-been.git

2. Navigate into the project directory:

       cd placeshavebeen

3. Open index.html in your browser:

        open index.html

or double-click the file

---
## Application Features
- **Add Places:** Users can add a place with location, landmarks, season, and optional notes.
- **View Details:** Clicking a place name shows all its details.
- **Delete Places:** Users can remove a place using the Delete button.
- **Dynamic UI:** The list of places updates automatically after adding or deleting.
- **Separate Logic:** Business logic (constructors & prototypes) is separated from UI logic.

---
# Business Logic
---
## Place Contructor
Creates a place object with multiple properties.

    function Place(location, landmarks, season, notes) {
        this.location = location;
        this.landmarks = landmarks;
        this.season = season;
        this.notes = notes;
    } 
---
## Prototype Method
Get the full details of a place.

    Place.prototype.getDetails = function (){
        return "Location: " + this.location +
            ", Landmarks: " + this.landmarks +
            ", Season: " + this.season +
            ", Notes: " + this.notes;
    };
---
## PlaceBook Constructor
Stores and manages multiple place objects.

    function PlaceBook() {
        this.places = [];
    }
---
## PlaceBook Prototype Methods

    // Add a place
    PlaceBook.prototype.addPlace = function(place) {
        this.places.push(place);
    };

    // Find a place by location
    PlaceBook.prototype.findPlace = function(location) {
        return this.places.find(function(place) {
            return place.location === location;
        });
    };

    // Delete a place by location
    PlaceBook.prototype.deletePlace = function(location) {
        this.places = this.places.filter(function(place) {
            return place.location !== location;
        });
    };
---



