const 가장가까운같은글자 = (s: string) => {
  return [...s].map((v, i) =>
    i !== s.indexOf(v) ? i - s.slice(0, i).lastIndexOf(v) : -1,
  );
};
const s1 = "banana";
const s2 = "foobar ";

console.log(가장가까운같은글자(s1));
console.log(가장가까운같은글자(s2));
