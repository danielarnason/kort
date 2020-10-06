
// Henter URL parametre
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const hasPunkt = urlParams.has('punkt');
const hasZoom = urlParams.has('zoom');
const hasLabel = urlParams.has('label');

let center;
let zoom;
let marker;
let popup;

if (hasPunkt) {
    center = urlParams.get('punkt').split(',').map(nr => Number(nr));
    marker = new mapboxgl.Marker().setLngLat(center)
} else {
    center = [11.333293, 55.337563];
}

hasZoom ? zoom = Number(urlParams.get('zoom')) : zoom = 9;

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsLWFybmFzb24iLCJhIjoiY2tmeHZxNXYzMDZiNzJycWZndmRoOWNnZiJ9.PpTdb7sw2jk9QB_x1DtJEA'
const map = new mapboxgl.Map({
    container: 'mapcontainer',
    style: 'mapbox://styles/mapbox/light-v10',
    center: center,
    zoom: zoom
})

hasPunkt ? marker.addTo(map) : null;

if (hasLabel && marker != null) {
    const label = urlParams.get('label')
    marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<b>${label}</b>`).addTo(map))
}
