export function capitalizeFirstLetter(string: string) {
    if (!string) return string;
    return string.charAt(1).toUpperCase() + string.slice(2);
}