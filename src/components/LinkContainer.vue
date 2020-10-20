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
            <v-btn @click="copyLink()" elevation="3" block>Kopier link!</v-btn>
            <LinkDialog :fullLink="fullLink" />
        </v-sheet>
        <v-alert dense type="success" :value="this.copyAlert">
            Du har kopieret Linket!
        </v-alert>
    </v-container>
</template>

<script>
import LinkDialog from './LinkDialog';
export default {
    components: {
        LinkDialog
    },
    data() {
        return {
            baseUrl: 'https://danielarnason.github.io/kort',
            labelText: '',
            copyAlert: false
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
            if (this.labelText) {
                url.searchParams.append("label", this.labelText)
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
        },
        showLink: function() {
            console.log('Vis mig dit link!')
        },
        copyLink: function() {
            let self = this;
            navigator.clipboard.writeText(self.fullLink)
                .then(
                    function() {
                        self.copyAlert = !self.copyAlert
                        setTimeout(() => {
                            self.copyAlert = !self.copyAlert
                        }, 3000)
                    })
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