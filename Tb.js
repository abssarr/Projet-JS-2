// 1. Trouver le maximum et le minimum
function trouverMax(tableau) {
  // Assurez-vous que le tableau n'est pas vide
  if (tableau.length === 0) {
    return undefined; // Ou une autre valeur appropriée
  }
  return Math.max(...tableau);
}

function trouverMin(tableau) {
  // Assurez-vous que le tableau n'est pas vide
  if (tableau.length === 0) {
    return undefined; // Ou une autre valeur appropriée
  }
  return Math.min(...tableau);
}

// 2. Calculer la somme d'un tableau
function calculerSomme(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}
// 3. Filtrer un tableau
function filtrerTableau(tableau, condition) {
  const resultat = [];
  for (let i = 0; i < tableau.length; i++) {
    if (condition(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }
  return resultat;
}