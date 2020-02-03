import * as Interface from '@/models/interface/interface';

export const sortOpts: Interface.IMovieSortBy[] = [
    {
        name: 'Popularity (Overall)',
        value: 'popularity.desc',
    },
    {
        name: 'Rating',
        value: 'vote_average.desc',
    },
    {
        name: 'Release Date',
        value: 'primary_release_date.desc',
    },
];
