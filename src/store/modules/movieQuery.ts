/* tslint:disable:no-shadowed-variable */
import { IActionContextBasic } from '@/store/index';
import * as Interface from '@/models/interface/interface';

interface IState {
    query: Interface.IMovieQeury;
}

const SET_QUERY = 'setQuery';
const RESET_QUERY = 'resetQuery';

// STATE
const state: IState = {
    query: { page: 1 },
};

// GETTER
const getters = {
    getQuery: (state: IState) => state.query,
};

// MUTATIONS
const mutations = {
    [SET_QUERY](state: IState, payload: Interface.IMovieQeury) {
        state.query = payload;
    },
    [RESET_QUERY](state: IState) {
        state.query = { page: 1 };
    },
};

// ACTIONS
const actions = {
    async setQuery(context: IActionContextBasic, data: Interface.IMovieQeury) {
        context.commit(SET_QUERY, data);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
