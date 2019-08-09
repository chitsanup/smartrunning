<template>
<v-container>
    <v-layout>
        <v-flex>
            <SettingHeader />
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex>
            <SettingBody />
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex>
            <Logout />
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import SettingHeader from '../components/setting/SettingHeader'
import SettingBody from '../components/setting/SettingBody'
import Logout from '../components/setting/Logout'
export default {
    components: {
        SettingHeader,
        SettingBody,
        Logout
    }
}
</script>

<style>

</style>
