// Calculates the score based on 3 numbers:
// - If all three numbers are different → return -1 (penalty)
// - If all three numbers are the same:
//     - If they are all 7 → return 50 (special jackpot bonus)
//     - Otherwise → return 10 (regular match bonus)
// - If two numbers match → return 1 (small reward)
export function calculateScore(num1, num2, num3) {
  if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    return -1;
  }
  if (num1 === num2 && num1 === num3) {
    return num1 == 7 ? 50 : 10;
  }
  return 1;
}
