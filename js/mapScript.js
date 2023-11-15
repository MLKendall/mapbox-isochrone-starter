 mapboxgl.accessToken = 'pk.eyJ1IjoibWtlbmRhbGw5MyIsImEiOiJjajh1ZnBza3gweWx0MndwNnhqdm4xNWxqIn0.rMuyyrv9yUHGnE0PiXzGLw';
 const map = new mapboxgl.Map({
   container: 'map', // Specify the container ID
   style: 'mapbox://styles/mapbox/streets-v12', // Specify which map style to use
   center: [-77.0369,38.895], // Specify the starting position
   zoom: 11.5, // Specify the starting zoom
 });


// Create constants to use in getIso()
const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
const lon = -77.034;
const lat = 38.899;
const profile = 'cycling'; // Set the default routing profile
const minutes = 10; // Set the default duration

// Create a function that sets up the Isochrone API query then makes an fetch call
async function getIso() {
  const query = await fetch(
    `${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const data = await query.json();
  console.log(data);
}

// Call the getIso function
// You will remove this later - it's just here so you can see the console.log results in this step
getIso();