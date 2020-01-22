export interface IGenreObj {
    [id: string]: { name: string };
}

export interface IGenreResponse {
    genres: IGenre[];
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IMovies[];
}

export interface IMovies {
    popularity: number;
    id: number;
    video: boolean;
    vote_count: number;
    vote_average: number;
    title: string;
    release_date: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    poster_path: string;
}

export interface IMovieSortBy {
    name: string;
    value: string;
}

export interface IKeywordIdResult {
    name: string;
    id: number;
}

export interface IKeywordIdResponse {
    page: number;
    results: IKeywordIdResult[];
    total_pages: number;
    total_results: number;
}

export interface IMovieQeury {
    ['with_keywords']?: string[] | number[];
    ['with_original_language']?: string;
    ['sort_by']?: string;
    ['primary_release_year']?: string | number;
    ['with_genres']?: string[] | number[];
    ['include_video']?: boolean;
    ['page']?: string | number;
}
