<template>
<v-container pa-0>
    <v-layout mb-2>
        <v-flex>
            <v-img aspect-ratio="2.8" style :src="imgzone" fab large dark>
                <v-layout pa-2>
                    <v-flex>
                        <v-icon @click="$router.push('/homeapp')">mdi-arrow-left</v-icon>
                    </v-flex>

                    <v-flex>
                        <h1>{{text}}</h1>
                    </v-flex>
                </v-layout>

            </v-img>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    components: {},
    props: {
        imgzone: {
            type: String,
            default: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        text: {
            type: String,
            default: "Text"
        },
    }
}
</script>

<style>

</style>
