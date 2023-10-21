
function romanos (numRomano){

    const tablaRomanos = {
    
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV:4,
        I:1
    
    }
    
    let resultado = 0;


    
    for(let i = 0 ; i < numRomano.length ; i++){
        
        // resultado += tablaRomanos[numRomano[i]]
        if(i === numRomano.length-1){
            
        }
    }
    
    // return resultado
}

console.log(romanos('XIV'))