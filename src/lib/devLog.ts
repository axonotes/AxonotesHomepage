import {dev} from "$app/environment";

/**
 * Logs messages to the console only during development.
 * Accepts any number of arguments, similar to console.log.
 *
 * @param {...string} args - The messages or objects to log.
 */
export function devLog(...args: unknown[]): void {
    if (dev) {
        console.log("[DEV]", ...args);
    }
}

/**
 * Logs a warning to the console only during development.
 *
 * @param {...string} args - The messages or objects to log as a warning.
 */
export function devWarn(...args: unknown[]): void {
    if (dev) {
        console.warn("[DEV WARN]", ...args);
    }
}

/**
 * Logs an error to the console only during development.
 *
 * @param {...string} args - The messages or objects to log as an error.
 */
export function devError(...args: unknown[]): void {
    if (dev) {
        console.error("[DEV ERROR]", ...args);
    }
}

/**
 * Logs a table to the console only during development.
 *
 * @param {unknown} data - The data to display as a table.
 * @param {string[]} [columns] - Optional array of column names.
 */
export function devTable(data: unknown, columns?: string[]): void {
    if (dev) {
        console.log("[DEV TABLE]"); // Add a prefix for context
        if (columns) {
            console.table(data, columns);
        } else {
            console.table(data);
        }
    }
}
