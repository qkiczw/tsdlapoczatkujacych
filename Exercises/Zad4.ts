{
    interface Weapon {
        "name" : string,
        "damage" : number,
        "ammoLeft" : number,
        "maxAmmo" : number,
        "rateOfFire": number,
        "range" : number
    }

    interface Unit {
        "name" : string,
        "hitPointsLeft" : number,
        "maxHitPoints" : number,
        "moveDistance" : number,
        "weapons" : Weapon[]
    }

    interface Infantry extends Unit {
    }

    interface Vehicle extends Unit {
        "fuelLeft" : number,
        "maxFuel" : number,
        "fuelConsumpionPerMove": number
    }

    const rifle : Weapon = {
         "name" : "shotgun",
        "damage" : 100,
        "ammoLeft" : 8,
        "maxAmmo" : 32,
        "rateOfFire": 80,
        "range" : 10
    }

    const marine : Unit = {
        "name" : "G.J. Joe",
        "hitPointsLeft" : 25,
        "maxHitPoints" : 100,
        "moveDistance" : 3,
        "weapons" : [rifle]
    }


    const tank : Vehicle = {
        "name" : "rudy",
        "fuelLeft" : 55,
        "maxFuel" : 100,
        "fuelConsumpionPerMove": 8,
        "hitPointsLeft" : 100,
        "maxHitPoints" : 100,
        "moveDistance" : 4,
        "weapons" : [rifle]
    }

    console.log(tank)
    console.log(`${tank}`)

}

