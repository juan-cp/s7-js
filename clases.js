class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    /*
    // Getter
    get area() {
       return this.calcArea();
     }
     */
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  }

  let user = {
    name: "John",
    surname: "Smith",
    //obtiene parametros del objeto desde inicializacion 
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
    //inicia parametros del objeto a partir de input value
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  

