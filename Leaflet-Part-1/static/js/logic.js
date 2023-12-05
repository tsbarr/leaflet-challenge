
// url to access json data
// all earthquakes for the past 7 days
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// fetch json data using d3 and console log
d3.json(url).then(
    // if promise is fulfilled:
    (data) => console.log(data),
    // if promise is rejected:
    () => console.log('data failed to load')
);
