export default {

    text(value) {
        if (value !== undefined) {
            return this.each(node => node.textContent = value);
        } else {
            return this.get(0).textContent;
        }
    },

    html(value) {
        // what do we need for html method if we can change textContent? 
        // in textContent things like <b></b> dont parse properly
        if (value !== undefined) {
            return this.each(node => node.innerHTML = value);
        } else {
            return this.get(0).innerHTML;
        }
    }
}