function solution(s, n) {
  return [...s]
    .map((v) => {
      const ascNumSum = v.charCodeAt(0) + n;
      if (v.match(/[A-Z]/g)) return ascNumSum > 90 ? ascNumSum - 26 : ascNumSum;
      if (v.match(/[a-z]/g)) return ascNumSum > 122 ? ascNumSum - 26 : ascNumSum;
      return 32;
    })
    .map((v) => String.fromCharCode(v))
    .join('');
}
