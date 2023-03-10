function rollAdvantageD20() {
  let roll1 = Math.floor(Math.random() *20) + 1;
  let roll2 = Math.floor(Math.random() *20) + 1;
  return Math.max(roll1, roll2);
}


let stats = {
  Strength: 0,
  Dexterity: 0,
  Constitution: 0,
  Intelligence: 0,
  Wisdom: 0,
  Charisma: 0
};

let rollButton = document.getElementById('roll-button');
let strengthValue = document.getElementById('strength-value');
let dexterityValue = document.getElementById('dexterity-value');
let constitutionValue = document.getElementById('constitution-value');
let intelligenceValue = document.getElementById('intelligence-value');
let wisdomValue = document.getElementById('wisdom-value');
let charismaValue = document.getElementById('charisma-value');

rollButton.addEventListener('click, function() {
  for (let i = 0; i < Object.keys(stats).length; i++) {
    let stat = Object.keys(stats)[i];
    stats[stat] = rollAdvantageD20;
  }
  let statsOutput = document.getElementById('stats-output');
  statsOutput.innerHTML =