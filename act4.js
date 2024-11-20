class nodo {
    constructor(valor) {
        this.valor = valor;
        this.izq = null;
        this.der = null;
    }
}

class arbolbinario {
    constructor() {
        this.raiz = null;
    }

    insert(valor) {
        const newnodo = new nodo(valor);
        if (!this.raiz) {
            this.raiz = newnodo;
            return this;
        }
    }
}
