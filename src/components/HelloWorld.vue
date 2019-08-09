<template>
<v-container>
  <v-img :aspect-ratio="3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox black--text">
          <v-flex>
            <v-icon @click="$router.push('/register')">mdi-settings</v-icon>
          </v-flex>
          <v-spacer></v-spacer>
          
          <v-flex shrink>
            <div class="subheading">{{name}}</div>
            <div class="body-1">{{age}} ปี</div>
            <div class="body-2">{{runcount}} การวิ่ง</div>
          </v-flex>
          
          
        </v-layout>
      </v-img>
  </v-container>
</template>

<script>
export default {
    props :{
      name : {
        type : String,
        default : "ชื่อ"
      },
      age : {
        type : String,
        default : "อายุ"
      },
      runcount : {
        type : String,
        default : "0"
      },
      
    },
    data: () => ({
    }),
  }
</script>

<style>

</style>
