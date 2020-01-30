import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import movieQuery from './modules/movieQuery';
import movieGenres from './modules/movieGenres';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        movieQuery,
        movieGenres,
    },
});

export interface IActionContextBasic {
    commit: Commit;
    dispatch: Dispatch;
}
