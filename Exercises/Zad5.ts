class Weapon {

        "name" : string
        "damage" : number
        "ammoLeft" : number
        "maxAmmo" : number
        "rateOfFire": number
        "range" : number

        constructor(name : string, damage : number, ammoLeft : number, maxAmmo : number, rateOfFire : number, range : number ) {
            this.name = name;
            this.damage = damage;
            this. ammoLeft = ammoLeft;
            this.maxAmmo = maxAmmo;
            this.rateOfFire = rateOfFire;
            this.range = range;
        }

    }

    class Unit {
        "name" : string
        "hitPointsLeft" : number
        "maxHitPoints" : number
        "moveDistance" : number
        "weapons" : Weapon[]

        constructor(name : string, hitPointsLeft : number, maxHitPoints : number, movieDistance : number, weapons : Weapon[]) {
            this.name = name;
            this.hitPointsLeft = hitPointsLeft;
            this.maxHitPoints = maxHitPoints;
            this.moveDistance = movieDistance;
            this.weapons = weapons
        }
    }

    class Infantry extends Unit {

    }

    class Vehicle extends Unit {

        "fuelLeft" : number
        "maxFuel" : number
        "fuelConsumpionPerMove": number
    }