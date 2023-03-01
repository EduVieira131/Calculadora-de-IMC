export function validateData(value) {
  return isNaN(value) || value == ''
}

export function calculateIMC(weight, height) {
  let IMC = (weight / (height / 100) ** 2).toFixed(2)
  return IMC
}