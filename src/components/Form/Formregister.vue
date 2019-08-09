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
        <v-text-field v-model="password" type="password" label="ยืนยันรหัสผ่าน" outline></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field v-model="firstname" type="text" label="ชื่อผู้ใช้" outline></v-text-field>
      </v-flex>
      <v-flex>
       <v-btn @click="$router.push('/Home')" block color="error" dark>สมัครสมาชิก</v-btn>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import { sync, call } from "vuex-pathify";
export default {
  name: "Register",
  computed: {},
  data: () => ({}),
  methods: {}
};
</script>

<style>
</style>