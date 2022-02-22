const { crearArchivo } = require("./helpers/crearArchivo");
const argv = require("./config/yargs");

crearArchivo(argv.b, argv.l, argv.h)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
