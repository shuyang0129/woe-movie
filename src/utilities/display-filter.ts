export const scoreOfStars = (voteAverage: number): number => {
    // Convert score format from max: 10 unit: 0.1 to max: 5 unit: 0.5
    // 2.3 -> 2 ; 2.6 -> 2.5
    return Math.floor(voteAverage) / 2;
};

export const minToHour = (time: number): string => {
    let hr = 0;
    let min = 0;
    hr = Math.floor(time / 60);
    min = time % 60;
    return `${hr}hr ${min}min`;
};

export const avatarWithInitials = (name: string): string => {
    return `https://ui-avatars.com/api/?rounded=true&name=${name}`;
};

export const tmdbImagePath = (filePath: string, size: string): string => {
    return `https://image.tmdb.org/t/p/${size}${filePath}`;
};
