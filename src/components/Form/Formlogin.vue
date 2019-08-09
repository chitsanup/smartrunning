<template>
  <v-container pa-5>
    <v-layout column>
      <v-flex>
        <v-text-field v-model="email" type="email" label="อีเมลล์" outline></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field v-model="password" type="password" label="รหัสผ่าน" outline></v-text-field>
      </v-flex>
      <v-flex>
       <v-btn @click="$router.push('/homeapp')" block color="error" dark>เข้าสู่ระบบ</v-btn>
    </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import axios from "axios";
import { sync, call } from "vuex-pathify";
export default {
  name: "Login",
  computed: {},
  data: () => ({}),
  methods: {}
};
</script>

<style>
</style>