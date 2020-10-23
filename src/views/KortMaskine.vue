<template>
  <v-app>
    <LinkContainer v-on:update-label="updateLabel($event)" :coordinates="this.clickedCoordinates" :zoomLevel="this.zoomLevel" />
    <MapView v-on:update-coordinates="updateCoordinates($event)" v-on:update-zoom="updateZoom($event)" :labelText="this.labelText"/>
  </v-app>
</template>

<script>
import MapView from '../components/MapView';
import LinkContainer from '../components/LinkContainer';

export default {
  name: 'App',

  components: {
    MapView,
    LinkContainer,
  },

  data() {
    return {
      clickedCoordinates: null,
      zoomLevel: null,
      labelText: null
    }
  },
  methods: {
    updateCoordinates: function(updatedCoordinates) {
      this.clickedCoordinates = updatedCoordinates
    },
    updateZoom: function(updatedZoomLevel) {
      this.zoomLevel = updatedZoomLevel
    },
    updateLabel: function(updatedLabel) {
      this.labelText = updatedLabel
    }
  }
};
</script>
