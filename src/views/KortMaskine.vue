<template>
  <v-app>
    <LinkContainer v-on:update-height="updateDivHeight($event)" v-on:update-width="updateDivWidth($event)" v-on:update-label="updateLabel($event)" :coordinates="this.clickedCoordinates" :zoomLevel="this.zoomLevel" />
    <MapView v-on:update-coordinates="updateCoordinates($event)" v-on:update-zoom="updateZoom($event)" :labelText="this.labelText" :divWidth="this.divWidth" :divHeight="this.divHeight"/>
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
      labelText: null,
      divWidth: '100%',
      divHeight: '100%'
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
    },
    updateDivWidth: function(updatedDivWidth) {
      if (updatedDivWidth.length > 0) {
        this.divWidth = `${updatedDivWidth}px` 
      } else {
        this.divWidth = '100%'
      }
    },
    updateDivHeight: function(updatedDivHeight) {
      if (updatedDivHeight.length > 0) {
        this.divHeight = `${updatedDivHeight}px` 
      } else {
        this.divHeight = '100%'
      }
    }
  }
};
</script>
