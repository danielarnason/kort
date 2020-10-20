<template>
    <v-container id="linkcontainer">
        <v-sheet
            class="pa-2"
            color="white"
            rounded
            elevation="3">
            <v-text-field 
                v-model="labelText"
                label="Tekst til label"
                hint="F.eks. din adresse"
                outlined
                >
            </v-text-field>
            <v-btn elevation="3" block>Kopier link!</v-btn>
            <v-btn class="mt-3" elevation="3" block>Vis link!</v-btn>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://danielarnason.github.io/kort',
            labelText: ''
        }
    },
    props: ['coordinates', 'zoomLevel'],
    computed: {
        fullLink() {
            let url = new URL(this.baseUrl)
            if (this.coordinates) {
                url.searchParams.append("punkt", `${this.coordinates.lng},${this.coordinates.lat}`)
            }
            if (this.zoomLevel) {
                url.searchParams.append("zoom", this.zoomLevel)
            }

            return url
        }
    },
    watch: {
        labelText: function() {
            this.updateLabelText()
        }
    },
    methods: {
        updateLabelText: function() {
            this.$emit('update-label', this.labelText)
        }
    }
}
</script>

<style scoped>
    #linkcontainer {
        position: fixed;
        top: 66px;
        right: 10px;
        width: auto;
        height: auto;
        z-index: 1;
    }
</style>