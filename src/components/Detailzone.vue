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
                            <h1>{{zone}}</h1>
                        </v-flex>
                    </v-layout>
                
            </v-img>
        </v-flex>
    </v-layout>
    <v-layout ml-2>
        <v-flex>
            <p>เหมาะสำหรับ</p>
        </v-flex>
        <v-flex>
            <p>:</p>
        </v-flex>
        <v-flex xs8>
            <p>{{recommend}}</p>
        </v-flex>
    </v-layout>
    <hr>
    <v-layout ml-2 mt-2>
        <v-flex>
            <p>อัตราการเต้นของหัวใจ</p>
        </v-flex>
        <v-flex>
            <p>:</p>
        </v-flex>
        <v-flex xs8>
            <p>{{hr}}</p>
        </v-flex>
    </v-layout>
    <hr>
    <v-layout ml-2 mt-2>
        <v-flex>
            <p>ลักษณะการวิ่ง</p>
        </v-flex>
        <v-flex>
            <p>:</p>
        </v-flex>
        <v-flex xs8>
            <img width="50%" :src="imgrunning">
        </v-flex>
    </v-layout>
    <hr>

    <v-flex>
        <v-btn @click="$router.push('/Home')" block color="error" dark>ตกลง</v-btn>
    </v-flex>

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
        zone: {
            type: String,
            default: "Zone0"
        },
        recommend: {
            type: String,
            default: "0"
        },
        hr: {
            type: String,
            default: "0"
        },
        imgrunning: {
            type: String,
            default: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },

    },
    data: () => ({}),
}
</script>
