<!----------Make By YourName---------------->
 <template>
<v-layout column>
    
    <form @submit.prevent="prepareRegister()" >
<v-flex>
        <v-text-field v-model="user.email" type="email" label="อีเมลล์" outline required ></v-text-field>
    </v-flex>
    <v-flex>
        <v-text-field v-model="user.password" type="password" label="รหัสผ่าน" outline required></v-text-field>
    </v-flex>
    <v-flex>
        <v-text-field v-model="user.password_confirmation" type="password" label="ยืนยันรหัสผ่าน" outline required></v-text-field>
    </v-flex>
    <v-flex>
        <v-text-field v-model="user.name" type="text" label="ชื่อผู้ใช้" outline required></v-text-field>
    </v-flex>
    <v-flex>
        <v-btn  type="submit" block color="error" dark>สมัครสมาชิก222</v-btn>
    </v-flex>
    </form>
    <pre>{{dd}}</pre>
    
</v-layout>
</template>

  
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
      ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
      ...call('authen/*'),
      async prepareRegister(){
      let user =  await this.register();
      if(user){
          await this.$router.push('/');
      } 
      },
        /******* Methods default run ******/
        load: async function () {
            await this.read();
        }
    },
}
</script>
