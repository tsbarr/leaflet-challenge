# leaflet-challenge
UofT SCS edX Data Bootcamp. Module 15 Challenge.

The data used for this challenge can be accessed [here](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson). 

## Instructions

Import and visualize the data by doing the following:

1. Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

2. Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

> Hint: The depth of the earth can be found as the third coordinate for each earthquake.

3. Include popups that provide additional information about the earthquake when its associated marker is clicked.

4. Create a legend that will provide context for your map data.

## Requirements

### Map (60 points)

- TileLayer loads without error (20 points)

- Connects to geojson API using D3 without error (20 points)

- Markers with size corresponding to earthquake magnitude (10 points)

- A legend showing the depth and their corresponding color (10 points)

### Data Points (40 points)

- Data points scale with magnitude level (10 points)

- Data points colors change with depth level (10 points)

- Each point has a tooltip with the Magnitude, the location and depth (10 points)

- All data points load in the correct locations (10 points)

---

## References
