<template>
<v-container>
    <v-layout>
        <v-flex>
            <v-flex style="padding: 20px;">
                <button @click="$router.push(goPage)" style="width: 100%;" :body-style="{ padding: 0 }">
                    <v-img aspect-ratio="1.8" :src="imgmode">
                        <h1 class="wh body-2">{{title}}</h1>
                        <v-layout pa-2 column fill-height>
                            <v-spacer></v-spacer>
                            <v-flex shrink>
                                <h1>{{zone_}}</h1>
                            </v-flex>
                        </v-layout>
                    </v-img>
                </button>
            </v-flex>

            <hr>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Title"
        },
        imgmode: {
            type: String,
            default: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        zone_: {
            type: String,
            default: "Zone 0"
        },
        goPage:{
          default:'/'
        }
    },
    data: () => ({

    })
}
</script>

<style>

</style>
