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
    ['with_keywords']?: string;
    ['with_original_language']?: string;
    ['sort_by']?: string;
    ['primary_release_year']?: number;
    ['with_genres']?: string;
    ['include_video']?: boolean;
    ['page']: number;
}

export interface IMovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IMovieProductioncompany[];
    production_countries: IMovieProductioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: IMovieSpokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieSpokenlanguage {
    iso_639_1: string;
    name: string;
}

export interface IMovieProductioncountry {
    iso_3166_1: string;
    name: string;
}

export interface IMovieProductioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
}

export interface IMoviePoeple {
    id: number;
    cast: IMovieCast[];
    crew: IMovieCrew[];
}

export interface IMovieCrew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path?: string;
}

export interface IMovieCast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path?: string;
}

export interface IMovieImage {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface IMovieSimilar {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
}

export interface IMovieReviewResponse {
    id: number;
    page: number;
    results: IMovieReview[];
    total_pages: number;
    total_results: number;
}

export interface IMovieReview {
    author: string;
    content: string;
    id: string;
    url: string;
}

export interface IMovieVideo {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}
