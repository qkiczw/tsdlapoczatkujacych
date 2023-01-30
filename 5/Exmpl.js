"use strict";
{
    let age = { value: 5 };
    let pawel = { value: "pawel" };
    function wrap(x) {
        return {
            value: x
        };
    }
    const x = wrap(5);
    wrap("pawel");
    const p = wrap({ name: "pawel", age: 32 });
}
