class WorkStation {

    cpuManufacture : string;
    cpuModel : string;
    ram : number;
    ssd : boolean
    os: string

    constructor(cpuManufacture : string, cpuModel : string, ram : number, ssd : boolean, os : string) {
        this.cpuManufacture = cpuManufacture;
        this.cpuModel = cpuModel;
        this.ram = ram;
        this.ssd = ssd;
        this.os = os;
    }

    showSpecification = () : string => {
        return `
        ###########SPECIFICATION############
        CPU - ${this.cpuManufacture}, ${this.cpuModel}
        RAM - ${this.ram}
        SSD - ${true ? "Yes" : "No"} 
        OS - ${this.os}
        ####################################
        `
    }

};

const developer =  new WorkStation("AMD", "RYZEN 5", 16, true, "Windows 10");

console.log(developer.showSpecification());