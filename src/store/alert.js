 
import { make } from 'vuex-pathify'
import Swal from 'sweetalert2'

const state = {
        miniAlert:{ 
            type:'success', 
            text:'Message', 
            head:'Header', 
            footer:'',
        }
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
 
    async onCustom(context,params){
        state.miniAlert = params
        await actions.onRunAlert();
    },

    async onError(context,params){ 
        state.miniAlert.type = 'error';
        state.miniAlert.head = params.head;
        state.miniAlert.text = params.text;
        state.miniAlert.footer = params.footer; 
        await actions.onRunAlert();
    },

    async onWarn(context,params){ 
        state.miniAlert.type = 'warning';
        state.miniAlert.head = params.head;
        state.miniAlert.text = params.text;
        state.miniAlert.footer = params.footer;
        await actions.onRunAlert();
    },

    async onSuccess(context,params){ 
        state.miniAlert.type = 'success';
        state.miniAlert.head = params.head;
        state.miniAlert.text = params.text;
        state.miniAlert.footer = params.footer;
        await actions.onRunAlert();
    },
    async onBlue(context,params){  
     state.miniAlert.type = 'info';
    state.miniAlert.head = params.head;
    state.miniAlert.text = params.text;
    state.miniAlert.footer = params.footer;
        await actions.onRunAlert();
    },

    async onRunAlert(){
        Swal.fire({
            type: state.miniAlert.type,
            title: state.miniAlert.head,
            text: state.miniAlert.text, 
            footer:state.miniAlert.footer
          })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }