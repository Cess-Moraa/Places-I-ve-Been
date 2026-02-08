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
# Test-Driven Development (TDD)
---
## Tests for place
    Describe: Place()
    Test: It should create a place object with correct properties
    Code:
    const place = new Place("Nairobi", "National Park", "Dry", "Beautiful city");
    Expected Output:
    place.location === "Nairobi"
    place.landmarks === "National Park"
    place.season === "Dry"
    place.notes === "Beautiful city"
 ---
    Describe: Place.prototype.getDetails()
    Test: It should return a full description of the place
    Code:
    place.getDetails();
    Expected Output:
    "Location: Nairobi, Landmarks: National Park, Season: Dry, Notes: Beautiful city"

## Tests for Placebook
    Describe: PlaceBook()
    Test: It should create an empty place book
    Code:
    const book = new PlaceBook();
    Expected Output:
    book.places.length === 0
---
    Describe: PlaceBook.prototype.addPlace()
    Test: It should add a place to the place book
    Code:
    book.addPlace(place);
    Expected Output:
    book.places.length === 1
---
    Describe: PlaceBook.prototype.findPlace()
    Test: It should find a place by location
    Code:
    book.findPlace("Nairobi");
    Expected Output:
    Place { location: "Nairobi", ... }
---
    Describe: PlaceBook.prototype.deletePlace()
    Test: It should remove a place by location
    Code:
    book.deletePlace("Nairobi");
    Expected Output:
    book.places.length === 0
---
## User Interface Logic
- Users submit a form to add a place.
- JavaScript creates a **Place object** and stores it in a **PlaceBook.**
- The list of places displays dynamically.
- Clicking a place name displays its details.
- Delete buttons remove a place and update the UI immediately.

---
## Known Bugs
No known bugs

---




