<template>
<v-container>
  <v-layout column>
    <v-flex>
      <app-headline label="เข้าสู่ระบบ"/>
    </v-flex>
    <v-flex>
      <Formlogin/>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex>
      <a @click="$router.push('/register')">
        <AppText label="ลืมรหัสผ่าน"/>
      </a>
    </v-flex>
    <v-flex>
      <a @click="$router.push('/register')">
        <AppText label="สมัครสมาชิก"/>
      </a>
    </v-flex>
  </v-layout>
</v-container>
  
</template>

<script>
import Formlogin from '../components/Form/Formlogin';
import AppHeadline from '../components/AppHeadline';
import AppText from '../components/AppText';

export default {
  components: {
    Formlogin,
    AppHeadline,
    AppText
  },
};
</script>

<style>

</style>

