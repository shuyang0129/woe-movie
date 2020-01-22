import { IActionContextBasic } from '@/store/index';
import * as Interface from '@/models/interface/interface';
import { QueryKey } from '@/models/enum/enum';

interface IState {
    query: Interface.IMovieQeury;
}

const state: IState = {
    query: {},
};

const getters = {
    getQuery: (state: IState) => state.query,
};

const mutations = {
    setQuery(state: IState, payload: Interface.IMovieQeury) {
        state.query = payload;
    },
    resetQuery(state: IState) {
        state.query = {};
    },
};

const actions = {
    async setQuery(context: IActionContextBasic, data: Interface.IMovieQeury) {
        context.commit('setQuery', data);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
