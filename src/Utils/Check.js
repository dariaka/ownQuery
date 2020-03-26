export function isSelector(value) {
    return (
        typeof value === "string" && 
        !isHTMLTag(value) && 
        !isDOMNode(value)
    );
}

export function isHTMLTag(value) {
    return (
        typeof value === "string" && 
        value.startsWith("<") && 
        value.endsWith(">") 
    );
}

export function isDOMNode(value) {
    return (
        typeof value === "object" && 
        value instanceof Element 
    );
}