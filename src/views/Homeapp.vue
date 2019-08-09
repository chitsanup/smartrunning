<template>
<v-container>
    <v-layout>
        <v-flex>
            <HomeAppHeader />
        </v-flex>
    </v-layout>
    <v-layout column>
        <v-flex>
            <RunMode goPage='/detailzone2' title="สำหรับลดไขมัน" zone_="Zone2" imgmode="https://img3.thelist.com/img/gallery/signs-youre-jogging-incorrectly/youre-not-exactly-a-yogi.jpg" />
        </v-flex>
        <v-flex>
            <RunMode goPage='/detailzone3'  title="สำหรับกระชับกล้ามเนื้อ" zone_="Zone3" imgmode="https://blog.wiggle.co.uk/sites/default/files/styles/770x480crop/public/hero/comp_2.jpg?itok=RP6Sw84X" />
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import HomeAppHeader from '../components/HomeAppHeader';
import RunMode from '../components/RunMode';

export default {
    components: {
        HelloWorld,
        HomeAppHeader,
        RunMode
    },
    data: () => ({
        
    })
};
</script>
