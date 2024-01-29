// 12917

function 문자열내림차순으로배치하기(s: string) {
  return _.sort([...s])
    .reverse()
    .join("");
}
