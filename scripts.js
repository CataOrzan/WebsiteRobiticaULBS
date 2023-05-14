function call() {
  const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
    (i) => document.getElementById(`nr${i}`).value
  );
  const numbers = inputs.map((input) => Number(input));
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const cred = numbers.reduce(
    (acc, n, i) => acc + n * [3, 4, 3, 3, 4, 4, 4, 3, 2][i],
    0
  );
  const pond = (cred / 300) * 10;
  const avg = sum / 9;

  document.getElementById("art").innerHTML = parseFloat(avg).toFixed(2);
  document.getElementById("pnd").innerHTML = parseFloat(pond).toFixed(2);
}
