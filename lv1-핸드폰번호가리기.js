// 12948

function solution(pn) {
  let last4Nums = pn.slice(pn.length - 4, pn.length);
  return (
    Array(pn.length - 4)
      .fill("*")
      .join("") + last4Nums
  );
}
