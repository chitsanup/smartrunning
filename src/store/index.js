import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';  
import authen from './authen';
import alert from './alert';
Vue.use(Vuex)

const modules = {
    authen,
    alert
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules : modules
})