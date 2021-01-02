const { ayuda } = require('./helper.js')

const suma = (ns) => {
  let acumulado = 0;
  for (i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  ayuda()
  return acumulado;
} 

const delUnoAlCinco = [1, 2, 3, 4, 5];

const multiplicados = delUnoAlCinco.map(x => x * 2)
// a pares
const parejas = delUnoAlCinco.map(x => [x, x])
// de de de lolo lala
const mascotas = [
  { nombre: 'Robotin', age: 12, tipo: 'gato' },
  { nombre: 'Puchini', edad: 12, tipo: 'perro' },
  { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
  { nombre: 'Pulga', edad: 10, tipo: 'perro' },
]
// edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log(resultado / edades.length);
