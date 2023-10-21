function tresLetras(str){
    let resultStr = str.split(' ')
    // let resultStr = str.split(' ', 3) --> Ocurre lo mismo que esta en el for
    let arrStr = []

    for(let i = 0 ; i < resultStr.length ; i++){
        if(i < 3){
            arrStr.push(resultStr[i])
        }

    }
    
   return arrStr

    
}

console.log(tresLetras('Mi papa camina mucho por las veredas'))