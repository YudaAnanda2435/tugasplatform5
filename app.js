// app
const getInput = require("./inputHandler");
const { hitungBMI, tentukanKategoriBMI } = require("./hitungBMI");
const tampilkanHasil = require("./outputHandler");

console.log("selamat datang di aplikasi BMI");
console.log("Silahkan isi:");

async function main() {
  let lanjut = "y";

  while (lanjut.toLowerCase() === "y") {
    const beratStr = await getInput("Masukkan berat badan Anda (kg): ");
    const tinggiStr = await getInput("Masukkan tinggi badan Anda (cm): ");

    const berat = parseFloat(beratStr);
    const tinggi = parseFloat(tinggiStr);

    if (isNaN(berat) || isNaN(tinggi)) {
      console.log("Input yang dimasukkan harus berupa angka.");
      process.exit(1);
    }

    const bmi = hitungBMI(tinggi, berat);
    const kategoriBerat = tentukanKategoriBMI(bmi);

    tampilkanHasil(kategoriBerat);

    lanjut = await getInput(
      "Apakah Anda ingin bertanya kembali? (y/n): "
    );
  }

  console.log("Terima kasih telah menggunakan aplikasi ini.");
  process.exit(0);
}

main();
