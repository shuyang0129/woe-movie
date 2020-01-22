import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import movieQuery from './modules/movieQuery';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        movieQuery,
    },
});

export interface IActionContextBasic {
    commit: Commit;
    dispatch: Dispatch;
}
