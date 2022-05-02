/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map(string => string.substring(0, 1).toUpperCase() + string.substring(1)).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    let newString = '';
    for (let i = 0; i <= string.length - 1; i++) {
        if (i % 2 === 0) {
            newString = newString + string[i].toLowerCase();
        } else {
            newString = newString + string[i].toUpperCase();
        }
    }
    return newString;
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, value) {
    if (action === 'uppercase') {
        return value.toUpperCase();
    } else if (action === 'lowercase') {
        return value.toLowerCase();
    } else if (action === 'fence') {
        return fenceString(value);
    } else if (action === 'capitalize') {
        return capitalizeString(value);
    } else {
        return value;
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case 'uppercase':
            console.log(string.toUpperCase());
            break;
        case 'lowercase':
            console.log(string.toLowerCase());
            break;
        case 'fence':
            console.log(fenceString(string));
            break;
        case 'capitalize':
            console.log(capitalizeString(string));
            break;
        default:
            console.log(string);
            break;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (const value of string) {
        console.log(value);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};
/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    while (true) {
        consoleLoggerWordsFor(string);
        break
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    let newString = string.split('');
    newString.forEach(element => {
        console.log(element);
    });
};