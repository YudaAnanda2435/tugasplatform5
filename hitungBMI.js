// hitungBMI
function hitungBMI(tinggi, berat) {
  const bmi = berat / Math.pow(tinggi / 100, 2);
  return bmi;
}

function tentukanKategoriBMI(bmi) {
  if (bmi < 18.5) {
    return "Kurus";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Ideal";
  } else {
    return "Obesitas";
  }
}

module.exports = { hitungBMI, tentukanKategoriBMI };
