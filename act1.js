function promesa(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 5) {
            resolve(`Número aceptado: ${numero}`)
        } else {
            reject(`mero rechazado: ${numero}`)
        }
    });
}



promesa(6)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })