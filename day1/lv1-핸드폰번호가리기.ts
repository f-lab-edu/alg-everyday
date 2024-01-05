// 12948

function 핸드폰번호가리기(pn: string) {
  const last4Nums = pn.slice(pn.length - 4, pn.length);
  return (
    Array(pn.length - 4)
      .fill("*")
      .join("") + last4Nums
  );
}
