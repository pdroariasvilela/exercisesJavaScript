let recetas = {flour: 500, sugar: 200, eggs: 1};

let ingredientes = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}; 


let aRecetas = []

let bIngredientes = []

for (let key in recetas) {
    aRecetas.push(key)
  }

  for (let key in ingredientes) {
    bIngredientes.push(key)
  }

  let todasLasClavesEnIngredientes = aRecetas.every(key => bIngredientes.includes(key));




  if (!todasLasClavesEnIngredientes) {
      console.log(0);
  } else {
      console.log(1);
  }

  console.log(aRecetas)
  console.log(bIngredientes)


