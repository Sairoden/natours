/* eslint-disable */

console.log("I love you JESSICA!");
const locations = JSON.parse(document.getElementById("map").dataset.locations);

console.log(locations);

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fpcm9kZW4iLCJhIjoiY2tvcXE1ZWwzMDExYTJvbzVwdzFzMWF1cyJ9.lNOASVF98k7kUdU5jKBh2Q";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/sairoden/ckoqqzzb31ihl18ldmfdvtxm3",
  scrollZoom: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement("div");
  el.className = "marker";

  // Add Marker
  new mapboxgl.Marker({
    element: el,
    anchor: "bottom",
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add Popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
