<template>
    <div :style="{width: this.divWidth, height: this.divHeight}" id='mapcontainer' class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
    name: 'MapView',
    data() {
        return {
            accessToken: 'pk.eyJ1IjoiZGFuaWVsLWFybmFzb24iLCJhIjoiY2tmeHZxNXYzMDZiNzJycWZndmRoOWNnZiJ9.PpTdb7sw2jk9QB_x1DtJEA',
            initCenter: [11.333293, 55.337563],
            marker: null,
            clickCoordinates: null,
            map: null,
            zoomLevel: 9,
        }
    },
    props: {
        labelText: String,
        divWidth: {
            type: String
        },
        divHeight: {
            type: String,
        }
    },
    watch: {
        clickCoordinates: function() {
            this.updateCoordinates()
        },
        zoomLevel: function() {
            this.updateZoom()
        },
        labelText: function() {
            if (this.marker != null) {
                this.marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<p class="text-caption font-weight-bold ma-0">${this.labelText}</p>`).addTo(this.map))
            } else if (this.marker != null && this.labelText === '') {
                this.marker.getPopup().remove()
            }
        }
    },
    methods: {
        updateCoordinates: function() {
            this.$emit('update-coordinates', this.clickCoordinates)
        },
        updateZoom: function() {
            this.$emit('update-zoom', this.zoomLevel)
        }
    },
    mounted: function() {
        let ref = this;
        mapboxgl.accessToken = this.accessToken;

        ref.map = new mapboxgl.Map({
            container: 'mapcontainer',
            style: 'mapbox://styles/mapbox/light-v10',
            center: this.initCenter,
            zoom: this.zoomLevel

        })
        let nav = new mapboxgl.NavigationControl({
            visualizePitch: true
        });
        ref.map.addControl(nav, 'top-left')

        if (ref.$route.name === 'KortMaskine') {
            ref.map.on('click', function(e) {
                ref.clickCoordinates = e.lngLat
                if (ref.marker == null) {
                    ref.marker = new mapboxgl.Marker()
                        .setLngLat([ref.clickCoordinates.lng, ref.clickCoordinates.lat])
                        .addTo(ref.map)
                    if (ref.labelText && ref.labelText.length > 0) {
                        ref.marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<p class="text-caption font-weight-bold ma-0">${ref.labelText}</p>`).addTo(ref.map))
                    }
                } else {
                    ref.marker.remove()
                    ref.marker = new mapboxgl.Marker()
                        .setLngLat([ref.clickCoordinates.lng, ref.clickCoordinates.lat])
                        .addTo(ref.map)
                    if (ref.labelText.length > 0) {
                        ref.marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<p class="text-caption font-weight-bold ma-0">${ref.labelText}</p>`).addTo(ref.map))
                    }
                }
            })
            ref.map.on('zoomend', function() {
                ref.zoomLevel = ref.map.getZoom()
            })
        } else if (ref.$route.name === 'Kort') {

            ref.marker = new mapboxgl.Marker()
                .setLngLat(ref.$route.query.punkt.split(','))
                .addTo(ref.map)
            if (ref.$route.query.label && ref.$route.query.label.length > 0) {
                ref.marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<p class="text-caption font-weight-bold ma-0">${ref.$route.query.label}</p>`).addTo(ref.map))
            }
            ref.map
                .setZoom(ref.$route.query.zoom)
                .setCenter(ref.$route.query.punkt.split(','))
                .removeControl(nav);
        }
    }
}
</script>

<style scoped>
#mapcontainer {
    margin: auto auto;
    outline: 2px auto black;
}
</style>