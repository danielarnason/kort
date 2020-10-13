<template>
  <LinkContainer :coordinates="this.clickedCoordinates" :zoomLevel="this.zoomLevel" />
  <MapView v-on:update-coordinates="updateCoordinates($event)" v-on:update-zoom="updateZoom($event)" />
</template>

<script>
import MapView from './components/MapView';
import LinkContainer from './components/LinkContainer';

export default {
  name: 'App',
  components: {
    MapView,
    LinkContainer
  },
  data() {
    return {
      clickedCoordinates: null,
      zoomLevel: null,
    }
  },
  methods: {
    updateCoordinates: function(updatedCoordinates) {
      this.clickedCoordinates = updatedCoordinates
    },
    updateZoom: function(updatedZoomLevel) {
      this.zoomLevel = updatedZoomLevel
    }
  }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
html, body, #app {
    height: 100%;
    width: 100%;
}
</style>
