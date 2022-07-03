const doOperacion = ({ number1 = 0, number2 = 0, symbol = "+" }) => {
  /* Realiza las operaciones pertinentes */
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  let result = 0;
  switch (symbol) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "^":
      result = Math.pow(number1, number2);
      break;
    case "v":
      result = Math.pow(number1, 1 / number2);
      break;
  }

  return result;
};

const calculate = (fn) => {
  fn = fn.replace(/ /g, "");
  let parenthesisRegExp = /\(([^]*[^]*)\)/;
  /* Key Map Asocia Operacion a la exp de separacion de valores*/
  let oppRegExp = {
    "*": /[0-9\.]{1,} ?[\*] ?[0-9\.]{1,}/,
    "/": /[0-9\.]{1,} ?[\/] ?[0-9\.]{1,}/,
    "-": /[0-9\.]{1,} ?[\-] ?[0-9\.]{1,}/,
    "+": /[0-9\.]{1,} ?[\+] ?[0-9\.]{1,}/,
  };

  let fnParenthesisEval = parenthesisRegExp.exec(fn);
  if (fnParenthesisEval) {
    /* Buscamos los conjuntos de parentecis, se resuelven desde adentro. */
    fn = fn.replace(fnParenthesisEval[0], calculate(fnParenthesisEval[1]));
  }

  /* Se extraen los simbolos de operaciones de el Key map */
  let operations = Object.keys(oppRegExp);
  operations.forEach((el) => {
    while (fn.includes(el)) {
      /* Se buscan los simbolos dentro del array */
      if (oppRegExp[el].exec(fn)) {
        /* Se buscan los simbolos dentro del array */
        let _eval = oppRegExp[el].exec(fn);
        /* Si la evaluacion de la regexp es falsa no existe ninguna operacion valida */
        if (!_eval) return;
        /* Se separan los 2 numeros del simbol */
        let [number1, number2] = _eval[0].split(el);
        /* Se reemplaca la operacion por el resultado */
        fn = fn.replace(
          _eval[0],
          doOperacion({
            number1,
            number2,
            symbol: el,
          })
        );
      }
    }
  });
  return parseFloat(fn);
};

module.exports = {
  doOperacion,
  calculate,
};
