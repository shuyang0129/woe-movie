import axios from '@/utilities/http';
import * as Interface from '@/models/interface/interface';

export default {
    // GET movie discover
    async getMovies(params = {}): Promise<Interface.IMoviesResponse> {
        const { data } = await axios('/discover/movie', {
            params,
        });
        return data;
    },
    // GET the list of official genres for movies.
    async getGenres(): Promise<Interface.IGenre[]> {
        const { data } = await axios('/genre/movie/list');
        return data.genres;
    },
};
