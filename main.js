
// Henter URL parametre
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const defaultCenter = [55.337563, 11.333293];
const defaultZoom = 11;

const map = L.map('mapcontainer').setView(defaultCenter, defaultZoom);

const baseMap = L.tileLayer.wms('https://services.kortforsyningen.dk/topo_skaermkort', {
    layers: 'dtk_skaermkort_graa',
    format: 'image/png',
    transparent: true,
    token: '3129f679b92e4ae43a423f49f3cebadd'
}).addTo(map);