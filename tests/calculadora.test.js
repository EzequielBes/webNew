const calculadora = require("../models/calculadora.js");

test("testaCalculo", () => {
  const resultado = calculadora.somar("20", 10);
  console.log(resultado);
  expect(resultado).toBe("2010");
});
