const Mark = {
  weight1: 78,
  weight2: 95,
  height1: 1.69,
  height2: 1.88,
};

const John = {
  weight1: 92,
  weight2: 85,
  height1: 1.95,
  height2: 1.76,
};

const BMIS = {
  MarkBMI1: Mark.weight1 / (Mark.height1 ** 2),
  MarkBMI2: Mark.weight2 / (Mark.height2 ** 2),
  JohnBMI1: John.weight1 / (John.height1 ** 2),
  JohnBMI2: John.weight2 / (John.height2 ** 2)
}

const MarkHigherBMI1 = BMIS.MarkBMI1 > BMIS.JohnBMI1;
const MarkHigherBMI2 = BMIS.MarkBMI2 > BMIS.JohnBMI2;

console.log(`Mark's BMI: ${BMIS.MarkBMI1}, John's BMI: ${BMIS.JohnBMI1}, is Mark's BMI higher than Jonh's? ${MarkHigherBMI1}`);
console.log(`Mark's BMI: ${BMIS.MarkBMI2}, John's BMI: ${BMIS.JohnBMI2}, is Mark's BMI higher than Jonh's? ${MarkHigherBMI2}`);