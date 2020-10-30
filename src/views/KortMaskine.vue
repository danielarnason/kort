<template>
  <v-app>
    <InfoFab />
    <LinkContainer v-on:update-height="updateDivHeight($event)" v-on:update-width="updateDivWidth($event)" v-on:update-label="updateLabel($event)" :coordinates="this.clickedCoordinates" :zoomLevel="this.zoomLevel" />
    <MapView v-on:update-coordinates="updateCoordinates($event)" v-on:update-zoom="updateZoom($event)" :labelText="this.labelText" :divWidth="this.divWidth" :divHeight="this.divHeight"/>
  </v-app>
</template>

<script>
import MapView from '../components/MapView';
import LinkContainer from '../components/LinkContainer';
import InfoFab from '../components/InfoFab';

export default {
  name: 'App',

  components: {
    MapView,
    LinkContainer,
    InfoFab
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
