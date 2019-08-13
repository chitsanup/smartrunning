import axios from '@/axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
import { read } from 'fs';
const state = {

    user:{"email":"pongvarid@gmail.com","password":"1234","password_confirmation":"1234","name":"pongvarid" },
    dd:[],


}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
    
    async register(context, params) {
   
       window.console.log("user/login")
        let result = await axios.post('/api/auth', state.user)
            .then((r) => {
                window.console.log("authen/register", r.data) 
                  store.dispatch('alert/onSuccess',{head:'สมัครสมาชิกสำเร็จ' }) 
                state.user = {};
                return true;
            }).catch( (error) => { 
                let errorTxt =  error.response.data; 
                 window.console.error(errorTxt.errors)
                  store.dispatch('alert/onError',{head:'ผิดพลาด',text:errorTxt.message }) 
                return false;
            })
        return result; 
    },

    async read(context, params){
       let uu =  await axios.get('http://192.168.1.118:191/api/auth')
        .then((r) => {
            state.dd = r.data;
        }).catch((e) => { 
        
         });

         return uu
    }
    

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }