/**
 * Checks if a value is empty or not.
 * @param value - The value to check.
 * @returns Returns true if the value is empty, else false.
 */
function isEmpty(value: any): boolean {
    if (value == null) {
        return true;
    }
    switch (typeof value) {
        case 'string':
            return !value.trim();
        case 'object':
            return Array.isArray(value) ? !value.length : !Object.keys(value).length;
        default:
            return false;
    }
}