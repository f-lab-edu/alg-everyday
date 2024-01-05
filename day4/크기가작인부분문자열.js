// 147355

function solution(t, p) {
  const pLen = p.length;
  const tLen = t.length;
  let count = 0;

  for (let i = 0; i <= tLen - pLen; i++) {
    if (t.slice(i, i + pLen) <= p) count++;
  }

  return count;
}
