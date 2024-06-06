export function capitalizeFirstLetter(string: string) {
    if (!string) return string;
    const words = string.split('/');
    const lastWord = words.pop() || '';
    return lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
}