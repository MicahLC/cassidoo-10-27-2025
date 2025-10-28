/**
 * Given a field represented as an array of 0s and 1s, where 1 means that position needs protection, you can place a scarecrow at any index, and each scarecrow protects up to k consecutive positions centered around itself (for example, for k = 3, a scarecrow at i protects i-1, i, and i+1). Return the minimum set of indices where scarecrows should be placed so that all the positions with 1 are protected. You can assume k is an odd number (or make up what happens if it's even).
 */

export const placeScarecrows = (field: number[], k: number) => {
    const scarecrowWidth = (k-1)/2;
    const placements : number[] = [];

    // do stuff
    let index = 0;
    while(index < field.length) {
        if (field[index] === 0) {
            ++index;
        } else {
            let position = Math.min(field.length - 1, index + scarecrowWidth);
            placements.push(position);
            index = position + 1 + scarecrowWidth;
        }
    }

    return placements;
}

export default placeScarecrows;