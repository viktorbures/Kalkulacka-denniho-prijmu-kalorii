document.getElementById('calorieForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const result = document.getElementById('result');

  if (!age || !height || !weight || !gender) {
    result.innerHTML = "❗ Vyplňte všechna pole.";
    return;
  }

  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = Math.round(bmr * activity);

  result.innerHTML = `
    Váš odhadovaný denní příjem kalorií je 
    <span class="text-primary">${tdee}</span> kcal.
  `;
});
