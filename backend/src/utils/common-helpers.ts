export const isIterableArray = (array: any[]): boolean =>
    Array.isArray(array) && !!array.length;
