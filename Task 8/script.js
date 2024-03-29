/* ------------------------------ TASK 8 -------------------------------------------
Sukurkite klasę "AdvancedCalculator" (naudokite ES6), kuri sukuria objektus su šiais metodais:
1. power() - priima du skaičius (bazę ir laipsnį) ir grąžina bazės pakėlimą laipsniu.
2. squareRoot() - priima vieną skaičių ir grąžina jo kvadratinę šaknį.
3. modulo() - priima du skaičius ir grąžina pirmojo skaičiaus liekaną padalijus iš antrojo.
4. factorial() - priima vieną skaičių ir grąžina jo faktorialą.
------------------------------------------------------------------------------------ */

class AdvancedCalculator {
  //power
  power(baze, laipsnis) {
    return Math.pow(baze, laipsnis);
  }

  //squareRoot
  squareRoot(number) {
    return Math.sqrt(number);
  }

  //modulo

  modulo(a, b) {
    return a % b;
  }

  //factorial

  factorial(number) {
    if (number < 0) return undefined;
    if (number === 0) return 1;

    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

// Test
const advancedCalculator = new AdvancedCalculator();
console.log(advancedCalculator.power(2, 3)); // Rezultatas: 8
console.log(advancedCalculator.squareRoot(16)); // Rezultatas: 4
console.log(advancedCalculator.modulo(10, 4)); // Rezultatas: 2
console.log(advancedCalculator.factorial(5)); // Rezultatast: 120
