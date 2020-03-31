import { isObject } from "../Utils/Check.js";

export default {

    attr(key, val) {
        if (key !== undefined && val === undefined) {
            return this.get(0).getAttribute(key);
        } else {
            return this.each(node => node.setAttribute(key, val))
        }
    },

    addClass(className) {
        // this way everything works properly:
        this.each(node => node.classList.add(className));
        return this;
        // but written this way doesnt:
        // return this.each(node => node.classList.add(className));
        // it adds a class but it doesnt returns proper this (node)
        // so when one wants to chain methods, like that:
        // node.addClass("red").css("font-size", "20px");
        // second method won't work
        // error says that a method cannot work on "undefined"
    },

    removeClass(className) {
        this.each(node => node.classList.remove(className));
        return this
    },

    toggleClass(className) {
        this.each(node => node.classList.toggle(className));
        return this
    },

    hasClass(className) {
        this.each(node => node.classList.has(className));
        return this
    },

    css(prop, val) {
        if (prop !== undefined && val !== undefined) {
            this.each(node => node.style[prop] = val);
        } else if (isObject(prop)) {
            for (let key in prop) {
                this.each(node => node.style[key] = prop[key]);
            }
        } else {
            return this.get(0).style[prop];
        }
        return this;
    }

}