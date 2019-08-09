<template>
<v-container>
    <v-layout @click="$router.push('/usersetting')">
        <v-flex>
            <v-icon>mdi-account-circle-outline</v-icon>
        </v-flex>
        <v-flex xs8>
            <p>ตั้งค่าบัญชีผู้ใช้</p>
        </v-flex>
    </v-layout>
    <hr>
    <v-layout mt-3 @click="$router.push('/bluetoothsetting')">
        <v-flex>
            <v-icon>mdi-watch</v-icon>
        </v-flex>
        <v-flex xs8>
            <p>ตั้งค่าอุปกรณ์</p>
        </v-flex>
    </v-layout>
    <hr>
</v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
