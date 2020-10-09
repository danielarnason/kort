
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
    marker = L.marker(center)
} else {
    center = [55.337563, 11.333293];
}

hasZoom ? zoom = Number(urlParams.get('zoom')) : zoom = 11;

const map = L.map('mapcontainer', {
    center: center,
    zoom: zoom
});

const baseMap = L.tileLayer.wms('https://services.kortforsyningen.dk/topo_skaermkort', {
    layers: 'dtk_skaermkort_graa',
    format: 'image/png',
    transparent: true,
    token: '3129f679b92e4ae43a423f49f3cebadd'
}).addTo(map);

hasPunkt ? marker.addTo(map) : null;

if (hasLabel && marker != null) {
    const label = urlParams.get('label')
    popup = L.popup({closeButton: false}).setContent(`<b>${label}</b>`)
    marker.bindPopup(popup).openPopup();
    
    map.on('movestart', (e) => {
        marker.closePopup();
    })
}
