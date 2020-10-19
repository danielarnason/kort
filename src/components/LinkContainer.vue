<template>
    <v-container id="linkcontainer">
        <p>{{ fullLink }}</p>
        <v-btn elevation="3" block>Kopier link!</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://danielarnason.github.io/kort'
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
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        color: white;
        z-index: 1;
    }
    p {
        margin: 5px;
    }
</style>