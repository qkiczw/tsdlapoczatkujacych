"use strict";
class Weapon {
    constructor(name, damage, ammoLeft, maxAmmo, rateOfFire, range) {
        this.name = name;
        this.damage = damage;
        this.ammoLeft = ammoLeft;
        this.maxAmmo = maxAmmo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
}
class Unit {
    constructor(name, hitPointsLeft, maxHitPoints, movieDistance, weapons) {
        this.name = name;
        this.hitPointsLeft = hitPointsLeft;
        this.maxHitPoints = maxHitPoints;
        this.moveDistance = movieDistance;
        this.weapons = weapons;
    }
}
class Infantry extends Unit {
}
class Vehicle extends Unit {
}
