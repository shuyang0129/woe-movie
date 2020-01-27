export const scoreOfStars = (voteAverage: number): number => {
    // Convert score format from max: 10 unit: 0.1 to max: 5 unit: 0.5
    // 2.3 -> 2 ; 2.6 -> 2.5
    return Math.floor(voteAverage) / 2;
};
