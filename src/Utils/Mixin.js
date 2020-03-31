export function mixin(...mixins) {

    const fn = function() {
    //funkcja pomocnicza do której zbierzemy zaimportowane metody
    //następnie ta funkcja zostanie poszerzona przez naszą klasę (a klasy to funkcje!)
    //
    };

    Object.assign(fn.prototype, ...mixins);

    return fn; 

}

export function staticMixin(objToMix, ...mixins) {

    Object.assign(objToMix, ...mixins);

    return objToMix;
}