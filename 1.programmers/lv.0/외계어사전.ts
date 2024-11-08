// https://school.programmers.co.kr/learn/courses/30/lessons/120869

// ver 1. 최초 코드
const 외계어사전 = (spell: string[], dic: string[]): number => {
  const sortedSpellStr = spell.sort().join('');
  for (const str of dic) {
    if (sortedSpellStr === [...str].sort().join('')) return 1;
  }
  return 2;
};

// ver 2. 단순화 코드
const 외계어사전2 = (spell: string[], dic: string[]): number => {
  const sortedSpellStr = spell.sort().join('');
  return dic.some((v) => [...v].sort().join('') === sortedSpellStr) ? 1 : 2;
};

console.log(외계어사전(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(외계어사전(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(외계어사전(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2

console.log(외계어사전2(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(외계어사전2(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(외계어사전2(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
