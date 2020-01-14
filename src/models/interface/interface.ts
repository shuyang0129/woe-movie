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
