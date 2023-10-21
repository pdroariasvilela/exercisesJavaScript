function fitsInOneBox(boxes) {
    // Ordenar las cajas de manera ascendente según el tamaño de su lado más largo
    boxes.sort((a, b) => {
        const sizeA = Math.max(a.l, a.w, a.h);
        const sizeB = Math.max(b.l, b.w, b.h);
        return sizeA - sizeB;
    });

    // Verificar si cada caja cabe en la siguiente caja en la lista ordenada
    for (let i = 0; i < boxes.length - 1; i++) {
        const currentBox = boxes[i];
        const nextBox = boxes[i + 1];
        
        if (
            currentBox.l >= nextBox.l ||
            currentBox.w >= nextBox.w ||
            currentBox.h >= nextBox.h
        ) {
            return false; // No se puede empacar en una sola caja
        }
    }

    return true; // Todas las cajas se pueden empacar en una sola
}
// const boxes = [
    //     { l: 3, w: 1, h: 2 },
    //     { l: 3, w: 1, h: 2 },
    //     { l: 3, w: 1, h: 2 }
    // ] // 

    // let newBox = boxes.map((box)=> {

    //     if(box.l == box.w && box.w == box.h){
    //         return true
    //     } else if(box.l){
    //         console.log(box.l)
    //     }
    // })


    // if(newBox.includes(false)){
    //     console.log(false)
    //  } else {
    //     console.log(true)
    // }


