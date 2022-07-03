const { calculate, doOperacion } = require("../calculadora");

describe("Test AlU", () => {
  test("should Suma", () => {
    expect(doOperacion({ number1: 1, number2: 4, symbol: "+" })).toBe(1 + 4);
    expect(doOperacion({ number1: 2, number2: 3, symbol: "+" })).toBe(2 + 3);
    expect(doOperacion({ number1: 3, number2: 2, symbol: "+" })).toBe(3 + 2);
    expect(doOperacion({ number1: 4, number2: 1, symbol: "+" })).toBe(4 + 1);
  });
  test("should Resta", () => {
    expect(doOperacion({ number1: 1, number2: 4, symbol: "-" })).toBe(1 - 4);
    expect(doOperacion({ number1: 2, number2: 3, symbol: "-" })).toBe(2 - 3);
    expect(doOperacion({ number1: 3, number2: 2, symbol: "-" })).toBe(3 - 2);
    expect(doOperacion({ number1: 4, number2: 1, symbol: "-" })).toBe(4 - 1);
  });
  test("should Multiplicacion", () => {
    expect(doOperacion({ number1: 1, number2: 4, symbol: "*" })).toBe(1 * 4);
    expect(doOperacion({ number1: 2, number2: 3, symbol: "*" })).toBe(2 * 3);
    expect(doOperacion({ number1: 3, number2: 2, symbol: "*" })).toBe(3 * 2);
    expect(doOperacion({ number1: 4, number2: 1, symbol: "*" })).toBe(4 * 1);
  });
  test("should Divicion", () => {
    expect(doOperacion({ number1: 1, number2: 4, symbol: "/" })).toBe(1 / 4);
    expect(doOperacion({ number1: 2, number2: 3, symbol: "/" })).toBe(2 / 3);
    expect(doOperacion({ number1: 3, number2: 2, symbol: "/" })).toBe(3 / 2);
    expect(doOperacion({ number1: 4, number2: 1, symbol: "/" })).toBe(4 / 1);
  });
});

describe("Test Calculadora", () => {
  test("Calcular sin parentesis", () => {
    expect(calculate("2+5*8-20+5/2")).toBe(eval("2+5*8-20+5/2"));
    expect(calculate("2+50-10+8*50-5")).toBe(eval("2+50-10+8*50-5"));
  });
  test("Calcular con un parentesis", () => {
    expect(calculate("2+5*(2+5)")).toBe(eval("2+5*(2+5)"));
    expect(calculate("2+5*(2+25*8-50)")).toBe(eval("2+5*(2+25*8-50)"));
  });
  test("Calcular con multiples parentesis", () => {
    expect(calculate("2+5*(2+5*(8+5/2+5*(5+1000)))")).toBe(
      eval("2+5*(2+5*(8+5/2+5*(5+1000)))")
    );
  });
});
