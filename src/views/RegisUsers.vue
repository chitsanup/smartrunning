<template>
    <v-container>
        <v-layout column>
             <v-flex>
                <app-headline label="สมัครสมาชิก"/>
            </v-flex>
            <v-flex>
                <Formregister/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Formregister from '../components/Form/Formregister';
import AppHeadline from '../components/AppHeadline';
export default {
    components:{
        Formregister,
        AppHeadline
    }
}
</script>

<style>

</style>
