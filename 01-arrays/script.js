const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, "Patrick")

console.log(teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length - 1];
teachers.pop()

console.log(lastTeacher)
console.log(teachers)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift()

console.log(firstTeacher)
console.log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa")

console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah")

console.log(teachers)

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex = null;

for (let i = 0; i < teachers.length; i++) {
  
  if (teachers[i] == "Lewis") {
    lewisIndex = i
    console.log(lewisIndex)
  }
  
}

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = null;

if (teachers.length !== 0) {
  isTeachersEmpty = false
}

console.log(isTeachersEmpty)
