const colors = require("colors");
const fs = require("fs");
const crearArchivo = async (num, list, h) => {
  try {
    let res = "";
    let consola = "";
    for (let i = 1; i <= h; i++) {
      res += `${num}${"x".green}${i}${"=".red}${num * i} \n`;
      consola += `${num}x${i}=${num * i} \n`;
    }
    fs.writeFileSync(`salida/tabla_del_${num}.txt`, consola);
    if (list) {
      console.log("========================".red);
      console.log(`Tabla del ${num}`.rainbow);
      console.log("========================".blue);
      console.log(res);
    }
    return `tabla_del_${num}.txt creada CORRECTAMENTE`.green;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
