"use strict";
{
    const rifle = {
        "name": "shotgun",
        "damage": 100,
        "ammoLeft": 8,
        "maxAmmo": 32,
        "rateOfFire": 80,
        "range": 10
    };
    const marine = {
        "name": "G.J. Joe",
        "hitPointsLeft": 25,
        "maxHitPoints": 100,
        "moveDistance": 3,
        "weapons": [rifle]
    };
    const tank = {
        "name": "rudy",
        "fuelLeft": 55,
        "maxFuel": 100,
        "fuelConsumpionPerMove": 8,
        "hitPointsLeft": 100,
        "maxHitPoints": 100,
        "moveDistance": 4,
        "weapons": [rifle]
    };
    console.log(tank);
    console.log(`${tank}`);
}
