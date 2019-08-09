<template>
<v-container>
  <v-layout grid-list-md text-center>
    <v-flex>
     <p>{{label}}</p>
    </v-flex>
   </v-layout>
</v-container>
</template>

<script>
  export default {
    name : "app-text",
    props :{
      label : {
        type : String,
        default : "Text"
      }
    },
    data: () => ({
     
    })
  }
</script>

<style>

</style>
