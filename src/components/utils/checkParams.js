// This code snippet is a JavaScript regular expression-based validator to determine whether a given string is valid JSON.

// What Is Valid JSON?
// JSON (JavaScript Object Notation) is a lightweight data-interchange format used for representing structured data.
//  It is commonly used in APIs and configurations because it's easy for humans to read and write,
//  and easy for machines to parse and generate.


// Rules for Valid JSON
// A string is valid JSON if it adheres to these rules:

// Starts and ends with {} or []:

// JSON data must be an object (curly braces {}) or an array (square brackets []).
// Key-Value Pairs (for Objects):

// In objects, keys must always be strings enclosed in double quotes (").
// Example: {"name": "Alice", "age": 25}

// Valid Values: JSON supports only specific types of values:
// Strings (in double quotes): "hello"
// Numbers (integer, decimal, or scientific notation): 42, 3.14, 2e10
// Boolean: true, false
// Null: null
// Objects (key-value pairs enclosed in {}): {"key": "value"}
// Arrays (comma-separated values enclosed in []): [1, 2, 3]
// Proper Syntax:

// Keys and values in objects are separated by colons (:).
// Multiple key-value pairs or array elements are separated by commas (,).
// Example:
// json
// Copy code
// {
//   "name": "Bob",
//   "age": 30,
//   "hobbies": ["reading", "sports"]
// }
// No Trailing Commas:

// JSON does not allow a trailing comma at the end of objects or arrays.
// Invalid: {"name": "Alice",}
// Valid: {"name": "Alice"}
// Escape Special Characters:

// Certain characters inside strings must be escaped using a backslash (\):
// Double quotes: \"
// Backslash: \\
// Newline: \n
// Tab: \t
// Unicode: \uXXXX (e.g., \u003C for <)

const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(
        text.replace(/\\["\\\/bfnrtu]/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
    )) {
        return true;
    } else {
        return false;
    }
};
export const checkParams = (formData, headerData, paramData, jsonText, setErrorMessage) => {

    if (!formData.url) {
        setErrorMessage("Requested URL is missing");
        return false;
    }


    if (!checkValidJson(jsonText)) {
        setErrorMessage("Text is not a valid JSON");
        return false
    }
    return true;

}

export const getHeadersandParams = (objArr) => {
    let obj = {}
    objArr.forEach(element => {
        if (element.hasOwnProperty('check') && element.check) {
            obj = { ...obj, [element.key]: element.value }
        }
    });
    return obj;
}
