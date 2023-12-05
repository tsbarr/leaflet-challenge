
// url to access json data
// all earthquakes for the past 7 days
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// fetch json data using d3 and console log
d3.json(url).then(
    // if promise is fulfilled:
    (data) => displayMap(data),
    // if promise is rejected:
    () => console.log('data failed to load')
);

// Function to display the map

function displayMap(data) {
    console.log(data);
    // Create a map object.
    let myMap = L.map("map", {
        center: [15.5994, -28.6731],
        zoom: 3
    });

    // Add a tile layer.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    const dataPoints = data.features;

    // Loop through the countries array, and create one marker for each country object.
    for (let i = 0; i < dataPoints.length; i++) {
        let earthquake = dataPoints[i];
        let properties = earthquake.properties;
        let mag = properties.mag;
        let geometry = earthquake.geometry;
        let lng = geometry.coordinates[0];
        let lat = geometry.coordinates[1];
        let depth = geometry.coordinates[2];


        // Conditionals for depth
        let color = "";
        if (depth > 100) {
            color = "brown";
        }
        else if (depth > 30) {
            color = "red";
        }
        else if (depth > 10) {
            color = "orange";
        }
        else if (depth > 5) {
            color = "yellow";
        }
        else if (depth > 1) {
            color = "green";
        }
        else {
            color = "blue";
        }

        // Add circles to the map.
        L.circle([lat, lng], {
            fillOpacity: 0.75,
            color: "white",
            weight: 1,
            fillColor: color,
            // Adjust the radius.
            radius: properties.mag * 20000
        }).bindPopup(`<h2>${properties.place}</h2><hr><h3>Magnitude: ${mag}</h3><h3>Depth: ${depth}</h3>`).addTo(myMap);
        
    }


}
