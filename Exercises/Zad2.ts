function returnAStr( str : string) : string {
    if( str.slice(0,2) === "ts") {
        return str
    } else {
        return `ts${str}`
    }
    
    
}


console.log(returnAStr('ts jest ok'));
console.log(returnAStr('xxx'));