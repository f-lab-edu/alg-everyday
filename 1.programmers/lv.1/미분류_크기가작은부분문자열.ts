// 147355

function 크기가작은부분문자열(t: string, p: string) {
  const pLen = p.length;
  const tLen = t.length;
  let count = 0;

  for (let i = 0; i <= tLen - pLen; i++) {
    if (t.slice(i, i + pLen) <= p) count++;
  }

  return count;
}
