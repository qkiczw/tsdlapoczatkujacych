"use strict";
class WorkStation {
    constructor(cpuManufacture, cpuModel, ram, ssd, os) {
        this.showSpecification = () => {
            return `
        ###########SPECIFICATION############
        CPU - ${this.cpuManufacture}, ${this.cpuModel}
        RAM - ${this.ram}
        SSD - ${true ? "Yes" : "No"} 
        OS - ${this.os}
        ####################################
        `;
        };
        this.cpuManufacture = cpuManufacture;
        this.cpuModel = cpuModel;
        this.ram = ram;
        this.ssd = ssd;
        this.os = os;
    }
}
;
const developer = new WorkStation("AMD", "RYZEN 5", 16, true, "Windows 10");
console.log(developer.showSpecification());
