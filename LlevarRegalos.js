function distributeGifts(packOfGifts, reindeers) {


    let PesoRegalo = packOfGifts.map((peso)=>{   
    let newZero =  peso.length
    return newZero
    })


    let PesoReindeers = reindeers.map((r)=>{
        let pesoR = r.length
        return pesoR
        // console.log(pesoR)
    })


    let PesoRegaloTotal = PesoRegalo.reduce((acumulador, numero) => {
        return acumulador + numero;
    }, 0);

    let PesoReno = PesoReindeers.reduce((acumulador, numero)=>{
        return acumulador + numero
    },0)

    let PesoRenoTotal = PesoReno * 2

    console.log(PesoRenoTotal)

    let acumulador = 0
    let nuevoValor = 0

    while( nuevoValor +  PesoRegaloTotal <= PesoRenoTotal){
        
        nuevoValor = nuevoValor + PesoRegaloTotal

        acumulador  = acumulador + 1

        
    }

    console.log(acumulador)
  }


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
distributeGifts(packOfGifts, reindeers) // 2


// let valorA = 12;
// let valorB = 24;

// let acumulador = 0;
// let nuevoValor = 0;

// while (nuevoValor + valorA <= valorB) {
//     nuevoValor += valorA;
//     acumulador += 1;
// }

// console.log(acumulador);
