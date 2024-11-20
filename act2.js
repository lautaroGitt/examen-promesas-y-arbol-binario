function multiplyByThree(numero) {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver(numero * 3);
      }, 2000); 
    });
  }
  
  function addFive(numero) {
    return new Promise((resolver) => {
      resolver(numero + 5);
    });
  }
  
  multiplyByThree(2)
    .then((resultado) => {
      console.log('Después de multiplicar por 3:', resultado);
      return addFive(resultado); 
    })
    .then((resultadofinal) => {
      console.log('Resultado final después de sumar 5:', resultadofinal);
    });
  