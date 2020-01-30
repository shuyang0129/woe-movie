/* tslint:disable:no-shadowed-variable */
import { IActionContextBasic } from '@/store/index';
import * as Interface from '@/models/interface/interface';
import tmdbApi from '@/models/api/movies';

interface IState {
    genres: Interface.IGenre[];
    genreObj: Interface.IGenreObj;
}

const SET_GENRES = 'setGenres';
const SET_GENRE_OBJ = 'setGenreObj';

// STATE
const state: IState = {
    genres: [],
    genreObj: {},
};

// GETTER
const getters = {
    getGenres: (state: IState) => state.genres,
    getGenreObj: (state: IState) => state.genreObj,
};

// MUTATIONS
const mutations = {
    [SET_GENRES](state: IState, payload: Interface.IGenre[]): void {
        state.genres = payload;
    },
    [SET_GENRE_OBJ](state: IState, payload: Interface.IGenreObj) {
        state.genreObj = payload;
    },
};

// ACTIONS
const actions = {
    async initGenres(context: IActionContextBasic) {
        // GET genres list of movies
        const genres = await tmdbApi.getGenres();
        context.commit(SET_GENRES, genres);

        // Convert response genres object to id indexes
        const genreObj: Interface.IGenreObj = {};
        genres.forEach((genre: Interface.IGenre) => {
            const { id, name } = genre;
            genreObj[id] = { name }; // ex "28": { name: "Action" }
        });
        context.commit(SET_GENRE_OBJ, genreObj);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
