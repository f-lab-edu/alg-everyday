// 12982

// function solution(d, budget) {
//     let count = 0;
//     d.sort((a,b)=>a-b).forEach((v)=>{
//         budget -= v
//         budget >= 0 ? count++ : null;

//     })
//     return count;
// }

function 예산(d: number[], budget: number) {
  return d.toSorted((a: number, b: number) => a - b).filter((v: number) => (budget -= v) >= 0).length;
}
