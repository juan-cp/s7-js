let persona = {
    "nombre": "juan",
    "apellido": "carrasco",
    "ocupacion": "analista"
};

// para ver atributo del objeto
Object.keys(persona);
//lectura de atributo
console.log(persona['nombre']);

//ej : metodo que agrega atributo
let agregarvalor = (x,y)=>{persona[x]=y;};

