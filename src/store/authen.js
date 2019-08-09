import axios from '@/axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
const state = {

    user:{"email":"pongvarid@gmail.com","password":"1234","password_confirmation":"1234","name":"pongvarid" }


}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
    
    async register(context, params) {
   
       window.console.log("user/login")
        let result = await axios.post('/api/auth/signup', state.user)
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
    

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }