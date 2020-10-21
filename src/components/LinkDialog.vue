<template>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mt-3"
                elevation="3"
                block
                v-bind="attrs"
                v-on="on"
            >
                Vis link!
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline">
                Link til kort
            </v-card-title>
            <v-card-text>{{ this.fullLink }}</v-card-text>
            <div class="text-center pb-4">
                <v-btn elevation="3" v-bind:href="this.fullLink">Åbn link</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    },
    props: [
        'fullLink'
    ]
}
</script>