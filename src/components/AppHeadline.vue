<template>
<v-container pa-0>
  <v-layout>
    <v-flex>
      <v-img  :aspect-ratio="3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox black--text">
          <v-flex>
            <v-icon @click="$router.push('/appsetting')">mdi-settings</v-icon>
          </v-flex>
          <v-flex shrink row pl-3> 
            <v-avatar>
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <v-flex>
                <p>{{name}}</p>
                <p >{{age}} ปี | {{runcount}} การวิ่ง</p>
            </v-flex>
            
          </v-flex> 
        </v-layout>
      </v-img>
    </v-flex>
   </v-layout>
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