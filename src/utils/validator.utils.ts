/*export function isIdValid(id: string | number) {
    return !isNaN(id) && id > 0;
}*/

export function isIdValid(id: string | number) {
    if (typeof id === 'number' && !isNaN(id) && id > 0) {
        return true;
    } else if (typeof id === 'string' && id.trim() !== '') {
        return true;
    }
    return false;
}
