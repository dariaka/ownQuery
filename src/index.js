import { isSelector, isHTMLTag, isDOMNode } from "./utils/check";

function init(param) {
    let nodes = null;

    if ( isSelector(param) ) {
        console.log("selector");
        // nodes = findElements(param);
    } else if ( isHTMLTag(param) ) {
        console.log("html tag");
        // nodes = createElement(param);
    } else if ( isDOMNode(param) ) {
        console.log("dom node");
        // nodes = param;
    }

}

window.ownQuery = init;