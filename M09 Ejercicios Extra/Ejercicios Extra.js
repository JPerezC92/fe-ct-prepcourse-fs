/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  return Array.from(string).reduce((acum, curr) => {
    if (curr in acum) {
      return { ...acum, [curr]: acum[curr] + 1 };
    }

    return { ...acum, [curr]: 1 };
  }, {});
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let lowercase = [];
  let upperCase = [];

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (element === element.toUpperCase()) {
      upperCase = [...upperCase, element];
      continue;
    }

    lowercase = [...lowercase, element];
  }

  return `${upperCase.join("")}${lowercase.join("")}`;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  return frase
    .split(" ")
    .map((v) => Array.from(v).reverse().join(""))
    .join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const arrOfDigits = Array.from(numero.toString());
  const isEven = arrOfDigits.length % 2 === 0;
  const middleIndex = Math.floor(arrOfDigits.length / 2);
  const maxFirstHalfIndex = isEven ? arrOfDigits.length / 2 : middleIndex;

  //   console.log({ arrOfDigits });
  //   console.log({ isEven });
  //   console.log({ middleIndex });
  //   console.log({ maxFirstHalfIndex });

  let pile = [];

  for (let index = 0; index < arrOfDigits.length; index++) {
    const element = arrOfDigits[index];

    if (!isEven && middleIndex === index) continue;

    if (index < maxFirstHalfIndex) {
      pile = [element, ...pile];
      continue;
    }

    const [elementToCompare, ...n] = pile;

    if (elementToCompare !== element) {
      return "No es capicua";
    }

    pile = [...n];
  }

  return "Es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  return Array.from(string)
    .filter((v) => v !== "a" && v !== "b" && v !== "c")
    .join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  return array1.filter((v) => array2.includes(v));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
