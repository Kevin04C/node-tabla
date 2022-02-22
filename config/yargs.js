const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    desc: "Es la base para la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Lo que usted ingresó no es un número";
    }
    return true;
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    desc: "Muestra la tabla por la consola",
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    desc: "Cantidad n números que será multiplicada por la base",
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "La cantidad no es un número";
    }
    return true;
  }).argv;

module.exports = argv;
