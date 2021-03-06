import axios from '@/utilities/api-handler';
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
    // GET id of keyword
    async getKeywordId(query: string): Promise<number[]> {
        if (query) {
            const { data } = await axios('/search/keyword', {
                params: { query },
            });
            const ids = data.results.map(
                (result: Interface.IKeywordIdResult) => result.id
            );
            return ids;
        }
        return [];
    },
    // GET movie detail
    async getMovieDetail(movieId: number | string) {
        const { data } = await axios(`/movie/${movieId}`);
        return data;
    },
    // GET actors of movie
    async getMoviePeople(movieId: number | string) {
        const { data } = await axios(`/movie/${movieId}/credits`);
        return data;
    },
    // GET images of movie
    async getMovieImages(movieId: number | string) {
        const { data } = await axios(`/movie/${movieId}/images`);
        return data;
    },
    // GET similar movie
    async getSimilarMovies(movieId: number | string) {
        const { data } = await axios(`/movie/${movieId}/similar`);
        return data;
    },
    // GET movie reviews
    async getMovieReviews(movieId: number | string, params = {}) {
        const { data } = await axios(`/movie/${movieId}/reviews`, {
            params,
        });
        return data;
    },
    // GET movie videos
    async getMovieVideos(movieId: number | string) {
        const { data } = await axios(`/movie/${movieId}/videos`);
        return data;
    },
};
