//console check
console.log("working");

//create map object
let map = L.map("mapid").setView([34.0522, -118.2437], 13);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let marker = L.circle([34.0522, -118.2437], {
  radius: 200,
  color: "black",
  fillColor: '#ffffa1'
}).addTo(map)

plateLink = "https://github.com/fraxen/tectonicplates/blob/master/original/PB2002_boundaries.dig.txt";


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);