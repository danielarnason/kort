<template>
    <div id='mapcontainer' class="basemap"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
    name: 'MapView',
    data() {
        return {
            accessToken: 'pk.eyJ1IjoiZGFuaWVsLWFybmFzb24iLCJhIjoiY2tmeHZxNXYzMDZiNzJycWZndmRoOWNnZiJ9.PpTdb7sw2jk9QB_x1DtJEA',
            initCenter: [11.333293, 55.337563],
            zoomLevel: 9,
            marker: null,
            clickCoordinates: null,
            map: null
        }
    },
    watch: {
        clickCoordinates: function() {
            this.updateCoordinates()
        },
        zoomLevel: function() {
            this.updateZoom()
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

        ref.map.on('click', function(e) {
            ref.clickCoordinates = e.lngLat
            if (ref.marker == null) {
                ref.marker = new mapboxgl.Marker()
                    .setLngLat([ref.clickCoordinates.lng, ref.clickCoordinates.lat])
                    .addTo(ref.map)
            } else {
                ref.marker.remove()
                ref.marker = new mapboxgl.Marker()
                    .setLngLat([ref.clickCoordinates.lng, ref.clickCoordinates.lat])
                    .addTo(ref.map)
            }
        })
        ref.map.on('zoomend', function() {
            ref.zoomLevel = ref.map.getZoom()
        })
    }
}
</script>

<style scoped>
#mapcontainer {
    height: 100%;
    width: 100%;
}
</style>