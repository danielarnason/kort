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
            <v-text-field 
                v-model="divWidth"
                label="Bredde"
                hint="I pixels"
                outlined
                >
            </v-text-field>
            <v-text-field 
                v-model="divHeight"
                label="Højde"
                hint="I pixels"
                outlined
                >
            </v-text-field>
            <!-- <v-btn @click="copyLink()" elevation="3" block>Kopier link!</v-btn> -->
            <v-btn
                elevation="3"
                block
                v-bind:disabled="this.coordinateCheck"
                :to="{
                    name: 'Kort',
                    query: {
                        label: this.labelText,
                        zoom: this.zoomLevel,
                        punkt: this.coordinates ? `${this.coordinates.lng},${this.coordinates.lat}` : null
                    }
                }">
                Åbn link
            </v-btn>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://danielarnason.github.io/kort',
            labelText: '',
            divWidth: '',
            divHeight: ''
        }
    },
    props: ['coordinates', 'zoomLevel'],
    watch: {
        labelText: function() {
            this.updateLabelText()
        },
        divWidth: function() {
            this.updateDivWidth()
        },
        divHeight: function() {
            this.updateDivHeight()
        }
    },
    methods: {
        updateLabelText: function() {
            this.$emit('update-label', this.labelText)
        },
        showLink: function() {
            console.log('Vis mig dit link!')
        },
        updateDivWidth: function() {
            this.$emit('update-width', this.divWidth)
        },
        updateDivHeight: function() {
            this.$emit('update-height', this.divHeight)
        }
    },
    computed: {
        coordinateCheck: function() {
            if (this.coordinates == null) {
                return true
            } else {
                return false
            }
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